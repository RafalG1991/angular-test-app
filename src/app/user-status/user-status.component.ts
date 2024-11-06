import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-user-status',
  standalone: true,
  imports: [],
  templateUrl: './user-status.component.html',
  styleUrl: './user-status.component.scss'
})
export class UserStatusComponent implements OnInit{
  status: string = '';

  constructor(private authService: AuthService) {};

  ngOnInit() {
    const isAuth = this.authService.isAuthenticated();

    this.status = isAuth ? 'Logged in' : 'Not logged in';
  }
}
