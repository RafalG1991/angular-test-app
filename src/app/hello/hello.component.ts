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
  @Input()
  text: string = "";
  getValue() {
    return this.value;
  }
}
