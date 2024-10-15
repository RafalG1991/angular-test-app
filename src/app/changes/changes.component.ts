import {Component, DoCheck, Input, OnInit} from '@angular/core';

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

  ngDoCheck() {
    console.log('Check');
  }

  ngOnInit() {
    setInterval(() => {
      console.log('Tick!');
    }, 1000);
  }
}
