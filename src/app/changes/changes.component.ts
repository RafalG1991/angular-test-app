import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-changes',
  standalone: true,
  imports: [],
  templateUrl: './changes.component.html',
  styleUrl: './changes.component.scss'
})
export class ChangesComponent {
  @Input()
  value: string = '';
}
