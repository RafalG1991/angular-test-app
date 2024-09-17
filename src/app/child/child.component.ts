import {Component, EventEmitter, Input, Output} from '@angular/core';

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

  @Output()
  onNewValue = new EventEmitter<number>();

  setNewValue() {
    const newValue = Math.round(Math.random() * 100);
    this.callback(newValue);
  }

  emitNewValue() {
    const newValue = Math.round(Math.random() * 100);
    this.onNewValue.emit(newValue);
  }
}
