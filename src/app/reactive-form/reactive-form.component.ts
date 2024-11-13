import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputComponent} from "../input/input.component";

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, InputComponent],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {
  loginForm = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl(''),
  });

  handleSubmit() {
    console.log(this.loginForm);
  }

  reset() {
    this.loginForm.reset();
  }

  setDefault() {
    this.loginForm.setValue({
      login: 'Default Login',
      password: 'admin123',
    });
  }
}
