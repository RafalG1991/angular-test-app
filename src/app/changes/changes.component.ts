import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  Input,
  NgZone,
  OnChanges,
  OnInit,
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
}
