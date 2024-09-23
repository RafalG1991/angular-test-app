import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-conditional-content',
  standalone: true,
  imports: [],
  templateUrl: './conditional-content.component.html',
  styleUrl: './conditional-content.component.scss'
})
export class ConditionalContentComponent {
  @Input()
  visible: boolean = true;

  toggleVisibility = () => {
    this.visible = !this.visible;
  }
}
