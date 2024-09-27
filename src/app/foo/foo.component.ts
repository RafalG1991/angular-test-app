import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-foo',
  standalone: true,
  imports: [],
  templateUrl: './foo.component.html',
  styleUrl: './foo.component.scss'
})
export class FooComponent implements OnInit, OnChanges, OnDestroy{
  @Input()
  text: string = '';

  ngOnInit() {
    console.log(this.text);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.text, 'Change');
  }

  ngOnDestroy() {
    console.log('On destroy');
  }

  @Input()
  value!: number;

  @Output()
  valueChange = new EventEmitter<number>();
}
