import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss'
})
export class HelloComponent {
  @Input()
  users: string[] = [''];
  @Input()
  name: string = "";
  value = "Lorem Ipsum";
  getValue() {
    return this.value;
  }
}
