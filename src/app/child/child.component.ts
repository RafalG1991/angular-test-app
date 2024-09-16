import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input()
  callback!: (newValue: number) => void;

  setNewValue() {
    const newValue = Math.round(Math.random() * 100);
    this.callback(newValue);
  }
}
