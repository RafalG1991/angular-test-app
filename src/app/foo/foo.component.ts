import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-foo',
  standalone: true,
  imports: [],
  templateUrl: './foo.component.html',
  styleUrl: './foo.component.scss'
})
export class FooComponent implements OnInit, OnChanges{
  @Input()
  text: string = '';

  ngOnInit() {
    console.log(this.text);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.text, 'Change');
  }
}
