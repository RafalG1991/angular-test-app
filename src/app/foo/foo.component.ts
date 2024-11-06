import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {FooService} from "../foo.service";

@Component({
  selector: 'app-foo',
  standalone: true,
  imports: [],
  templateUrl: './foo.component.html',
  styleUrl: './foo.component.scss'
})
export class FooComponent implements OnInit, OnChanges, OnDestroy{
  private fooService = inject(FooService);
  value = this.fooService.getValue();

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

  // @Input()
  // value!: number;

  @Output()
  valueChange = new EventEmitter<number>();

  increase = () => {
    this.valueChange.emit(this.value + 100);
  }
}
