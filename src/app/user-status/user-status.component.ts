import {Component, computed, OnInit, Signal} from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-user-status',
  standalone: true,
  imports: [],
  templateUrl: './user-status.component.html',
  styleUrl: './user-status.component.scss'
})
export class UserStatusComponent {
  status!: Signal<'Logged in' | 'Logged out' >;

  constructor(private authService: AuthService) {
    this.status = computed(() => this.authService.isAuthenticated() ? 'Logged in' : 'Logged out');
  };
}
