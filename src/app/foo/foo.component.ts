import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-foo',
  standalone: true,
  imports: [],
  templateUrl: './foo.component.html',
  styleUrl: './foo.component.scss'
})
export class FooComponent implements OnInit{
  @Input()
  text: string = '';

  ngOnInit() {
    console.log(this.text);
  }
}
