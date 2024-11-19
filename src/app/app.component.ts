import {
  AfterViewInit,
  Component,
  computed,
  effect, ElementRef, inject, OnDestroy,
  OnInit,
  QueryList,
  Signal,
  signal, ViewChild,
  ViewChildren,
  WritableSignal
} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {HelloComponent} from "./hello/hello.component";
import {ParentComponent} from "./parent/parent.component";
import {AsyncPipe, CurrencyPipe, DatePipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {ContainerComponent} from "./container/container.component";
import {TitleComponent} from "./title/title.component";
import {ConditionalContentComponent} from "./conditional-content/conditional-content.component";
import {SmartComponentComponent} from "./smart-component/smart-component.component";
import {FooComponent} from "./foo/foo.component";
import {TemplateComponent} from "./template/template.component";
import {ChildComponent} from "./child/child.component";
import {ChangesComponent} from "./changes/changes.component";
import {
  debounce, debounceTime,
  delay,
  filter,
  from,
  fromEvent,
  interval,
  map,
  observable,
  Observable,
  of, share, Subject,
  Subscription,
  take,
  takeUntil,
  tap,
  timer
} from "rxjs";
import {FooService} from "./foo.service";
import {UserStatusComponent} from "./user-status/user-status.component";
import {AuthService} from "./services/auth.service";
import {FooPipe} from "./pipes/foo.pipe";
import {CheckPipe} from "./pipes/check.pipe";
import {ValuesService} from "./services/values.service";
import {CountMorePipe} from "./pipes/count-more.pipe";
import {CountLessPipe} from "./pipes/count-less.pipe";
import {FormsModule, NgForm} from "@angular/forms";
import {ReactiveFormComponent} from "./reactive-form/reactive-form.component";
import {HttpClient} from "@angular/common/http";
import {ApiService} from "./services/api.service";

type User = {
  name: string;
  age: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloComponent, ParentComponent, NgIf, NgForOf, NgClass, ContainerComponent, TitleComponent, ConditionalContentComponent, SmartComponentComponent, FooComponent, TemplateComponent, ChildComponent, ChangesComponent, AsyncPipe, UserStatusComponent, DatePipe, CurrencyPipe, FooPipe, CheckPipe, CountMorePipe, CountLessPipe, FormsModule, ReactiveFormComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  private router = inject(Router);

  redirectWithDelay(productId: string) {
    setTimeout(() => {
      this.router.navigate(['/product', productId]);
    }, 2000);
  }

  private api = inject(ApiService);

  user = {
    login: '',
    password: '',
  };

  handleSubmit(form: NgForm) {

  }

  price: number = 1245.12;
  date: Date = new Date();

  text: string = 'Ala ma kota a kot ma Alę';

  private valuesService: ValuesService = inject(ValuesService);
  values = this.valuesService.values;
  addNewValue() {
    this.valuesService.addNewValue(Math.round(Math.random() * 100));
  }

  isVisible: boolean = true;

  toggle() {
    this.isVisible = !this.isVisible;
  }

  login() {
    this.authService.login();
  }

  loginSubject() {
    this.authService.loginSubject();
  }

  logout() {
    this.authService.logout();
  }

  logoutSubject() {
    this.authService.logoutSubject();
  }

  title = 'TestApp';
  users: {id: number, name: string}[] = [{id: 1, name: 'Tomek'}, {id: 2, name: 'Andrzej'}, {id: 3, name: 'Marzena'}, {id: 4, name: 'Wiesław'}];
  shouldBeVisible=true;
  trackUsersFn(index: number, user: {id: number, name: string}) {
    return user.id;
  }
  isLoggedIn: boolean|null = null;

  isActive: boolean = true;

  handleClick = () => {
    this.text = 'Dolor sit amet';
    this.shouldBeVisible = !this.shouldBeVisible;
  }

  // value: string = 'change detection';
  // values: number[] = [];

  // addNewValue() {
  //   const newValue = Math.round(Math.random() * 100);
  //   this.values.push(newValue);
  //   // this.values = [...this.values, newValue];
  // }

  increase = () => {
    this.value = this.value + 100;
  }

  @ViewChildren(ChildComponent)
  childComponents!: QueryList<ChildComponent>

  sum: number = 0;

  calculateSum = () => {
    this.sum = this.childComponents.reduce((acc, curr) => acc + curr.value, 0);
  }

  counter: WritableSignal<number> = signal(100);
  doubleCounter: Signal<number> = computed(() => this.counter() * 2);

  value!: number;

  constructor(private fooService: FooService, private authService: AuthService) {
    this.value = fooService.getValue();
    effect((onCleanup) => {
      console.log(`Counter value ${this.counter()}`)

      onCleanup(() => {
        console.log('Cleanup called!')
      })
    });
  }

  increaseSignal() {
    this.counter.update(prev => prev + 1);
  }

  decreaseSignal() {
    this.counter.update(prev => prev - 1);
  }

  reset() {
    this.counter.set(0);
  }

  // handleAddNewValue(newValue: number) {
  //   this.values.push(newValue);
  // }

  // obsValue!: Observable<number>;
  //
  // isAdult$ = this.getUser().pipe(
  //   tap(user => console.log(user.age)),
  //   map(user => user.age >= 18)
  // )
  //
  // getUser(): Observable<User> {
  //   return of({
  //     name: "Marcin",
  //     age: Math.round((Math.random() * 60) + 1),
  //   })
  //     .pipe(
  //       delay(2000)
  //     )
  // }

  timer!: Subscription;

  @ViewChild('btn')
  button!: ElementRef<HTMLButtonElement>

  ngAfterViewInit() {
    // fromEvent(this.button.nativeElement, 'click')
    //   .pipe(
    //     debounceTime(5000),
    //   )
    //   .subscribe(val => console.log('Click!', val));
  }

  ngOnInit(): void {
    const httpObs$ = this.api.get<{ ip: string }>('?format=json')
      .pipe(
        map(data => data?.ip || 'Something went wrong!')
      )
    httpObs$.subscribe(ip => console.log("IP1: ", ip));
    httpObs$.subscribe(ip => console.log("IP2: ", ip));

    // const obs = interval(1000).pipe(share());
    //
    // obs.subscribe(val => console.log(val));
    //
    // setTimeout(() => {
    //   obs.subscribe(val => console.log(val));
    // }, 5000);

    // const subject = new Subject<number>();
    //
    // subject.subscribe(val => console.log(val));
    // subject.subscribe(val => console.log(val));
    //
    // subject.next(1000);
    //
    // interval(1000).subscribe(subject);
    //
    // timer(5000).subscribe(_ => subject.complete());

    // this.timer = interval(1000)
    //   .pipe(
    //     map(val => 1),
    //     take(5)
    //   )
    //   .subscribe(val => console.log(val));
    //
    // timer(5000)
    //   .subscribe(val => console.log(val));

    // const counter = new Observable<number>(observer => {
    //   let counter = 0;
    //   setInterval(() => {
    //     observer.next(counter++);
    //   }, 1000);
    // })
    //
    // const watchdog = new Observable<boolean>(observer => {
    //   setTimeout(() => {
    //     observer.next(true);
    //   }, 5000);
    // });
    //
    // counter
    //   .pipe(
    //     takeUntil(watchdog),
    //   )
    //   .subscribe(val => console.log(val));

    // counter
    //   .pipe(
    //     take(5),
    //   )
    //   .subscribe(val => console.log(val));
    // const obs1$ = of([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    // const obs2$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    //
    // obs1$.subscribe(val => console.log("OF", val));
    // obs2$.subscribe(val => console.log("FROM", val));

    // this.obsValue = new Observable<number>(observer => {
    //   // observer.next(1000);
    //   let counter = 0;
    //   const interval = setInterval(() => {
    //     observer.next(counter++);
    //   }, 1000);
    //
    //   return {
    //     unsubscribe() {
    //       console.log("observable unsubscribe");
    //       clearInterval(interval);
    //     }
    //   }
    // })
    //   .pipe(
    //     filter(el => el % 2 === 0)
    //   )

    // this.obsValue.subscribe(val => {
    //     console.log(val);
    // });

    // observable.subscribe(val => {
    //   console.log(val);
    // });
  }

  ngOnDestroy(): void {
    this.timer.unsubscribe();
  }
}
