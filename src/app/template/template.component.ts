import {Component, ViewChild} from '@angular/core';
import {NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [
    NgTemplateOutlet
  ],
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss'
})
export class TemplateComponent {
  @ViewChild('input')
  inputElement: any;

  show () {
    console.log(this.inputElement);
  }
}
