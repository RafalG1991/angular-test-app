import {
  ChangeDetectionStrategy,
  Component,
  DoCheck, EventEmitter,
  Input,
  NgZone,
  OnChanges,
  OnInit, Output,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-changes',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './changes.component.html',
  styleUrl: './changes.component.scss'
})
export class ChangesComponent implements DoCheck, OnInit, OnChanges {
  @Input()
  value: string = '';

  @Input()
  values: number[] = [];

  @Output()
  onNewValue= new EventEmitter<number>();

  changeValue() {
    this.value = 'Lorem Ipsum';
  }

  constructor(private ngZone: NgZone) {}

  ngDoCheck() {
    console.log('Check');
  }

  ngOnInit() {
    // this.ngZone.runOutsideAngular(() => {
    //   setInterval(() => {
    //     console.log('Tick!');
    //   }, 1000);
    // });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('New change!', changes);
  }

  addNewValue() {
    const newValue = Math.round(Math.random() * 1000);
    this.onNewValue.emit(newValue);
  }
}
