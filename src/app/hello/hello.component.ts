import {Component, input, Input, OnInit, signal} from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss'
})
export class HelloComponent implements OnInit {
  @Input()
  users: string[] = [''];
  @Input()
  name: string = "";
  value = "Lorem Ipsum";

  text = input.required<string>();
  getValue() {
    return this.value;
  }

  message = signal<string>('');

  ngOnInit() {
    this.message.set(this.text());
  }
}
