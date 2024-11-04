import {
  Component,
  computed,
  effect,
  OnInit,
  QueryList,
  Signal,
  signal,
  ViewChildren,
  WritableSignal
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HelloComponent} from "./hello/hello.component";
import {ParentComponent} from "./parent/parent.component";
import {AsyncPipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {ContainerComponent} from "./container/container.component";
import {TitleComponent} from "./title/title.component";
import {ConditionalContentComponent} from "./conditional-content/conditional-content.component";
import {SmartComponentComponent} from "./smart-component/smart-component.component";
import {FooComponent} from "./foo/foo.component";
import {TemplateComponent} from "./template/template.component";
import {ChildComponent} from "./child/child.component";
import {ChangesComponent} from "./changes/changes.component";
import {filter, observable, Observable} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloComponent, ParentComponent, NgIf, NgForOf, NgClass, ContainerComponent, TitleComponent, ConditionalContentComponent, SmartComponentComponent, FooComponent, TemplateComponent, ChildComponent, ChangesComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'TestApp';
  users: {id: number, name: string}[] = [{id: 1, name: 'Tomek'}, {id: 2, name: 'Andrzej'}, {id: 3, name: 'Marzena'}, {id: 4, name: 'Wiesław'}];
  shouldBeVisible=true;
  trackUsersFn(index: number, user: {id: number, name: string}) {
    return user.id;
  }
  isLoggedIn: boolean|null = null;

  isActive: boolean = true;

  text: string = 'Lorem Ipsum';

  handleClick = () => {
    this.text = 'Dolor sit amet';
    this.shouldBeVisible = !this.shouldBeVisible;
  }

  value: string = 'change detection';
  values: number[] = [];

  addNewValue() {
    const newValue = Math.round(Math.random() * 100);
    this.values.push(newValue);
    // this.values = [...this.values, newValue];
  }

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

  constructor() {
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

  handleAddNewValue(newValue: number) {
    this.values.push(newValue);
  }

  obsValue!: Observable<number>;

  ngOnInit(): void {
    this.obsValue = new Observable<number>(observer => {
      // observer.next(1000);
      let counter = 0;
      const interval = setInterval(() => {
        observer.next(counter++);
      }, 1000);

      return {
        unsubscribe() {
          console.log("observable unsubscribe");
          clearInterval(interval);
        }
      }
    });

    this.obsValue
      .pipe(
        filter(el => el % 2 === 0)
      )
      .subscribe(val => {
        console.log(val);
    });

    // observable.subscribe(val => {
    //   console.log(val);
    // });
  }
}
