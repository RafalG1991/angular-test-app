import {Component, OnInit, Signal} from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-user-status',
  standalone: true,
  imports: [],
  templateUrl: './user-status.component.html',
  styleUrl: './user-status.component.scss'
})
export class UserStatusComponent {
  status!: Signal<boolean>;

  constructor(private authService: AuthService) {
    this.status = this.authService.isAuthenticated;
  };
}
