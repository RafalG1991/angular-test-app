import {Component, DoCheck, Input, NgZone, OnInit} from '@angular/core';

@Component({
  selector: 'app-changes',
  standalone: true,
  imports: [],
  templateUrl: './changes.component.html',
  styleUrl: './changes.component.scss'
})
export class ChangesComponent implements DoCheck, OnInit {
  @Input()
  value: string = '';

  changeValue() {
    this.value = 'Lorem Ipsum';
  }

  constructor(private ngZone: NgZone) {}

  ngDoCheck() {
    console.log('Check');
  }

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        console.log('Tick!');
      }, 1000);
    });
  }
}
