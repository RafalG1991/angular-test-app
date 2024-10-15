import {Component, DoCheck, Input} from '@angular/core';

@Component({
  selector: 'app-changes',
  standalone: true,
  imports: [],
  templateUrl: './changes.component.html',
  styleUrl: './changes.component.scss'
})
export class ChangesComponent implements DoCheck{
  @Input()
  value: string = '';

  changeValue() {
    this.value = 'Lorem Ipsum';
  }

  ngDoCheck() {
    console.log('Check');
  }
}
