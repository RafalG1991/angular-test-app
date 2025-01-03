import {Component, Input} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input()
  type: string = '';

  @Input()
  name: string = '';

  @Input()
  group!: FormGroup;

  isInvalid() {
    const control = this.group.get(this.name);

    if(!control) return false;

    return control.touched && control.invalid;
  }

  hasError(code: string) {
    const control = this.group.get(this.name);

    if(!control) return false;

    return control.touched && control.hasError(code);
  }
}
