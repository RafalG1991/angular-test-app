import { Component } from '@angular/core';

@Component({
  selector: 'app-smart-component',
  standalone: true,
  imports: [],
  templateUrl: './smart-component.component.html',
  styleUrl: './smart-component.component.scss'
})
export class SmartComponentComponent {
  constructor() {
    console.log("Constructor");
    setInterval(() => console.log("Tick"), 1000);
  }
}
