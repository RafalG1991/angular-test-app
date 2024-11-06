import {Injectable, signal} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthenticated = signal<boolean>(false);
  public isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  login() {
    this.isAuthenticated.set(true);
  }

  loginSubject() {
    this.isAuthenticatedSubject.next(true);
  }

  logout() {
    this.isAuthenticated.set(false);
  }

  logoutSubject() {
    this.isAuthenticatedSubject.next(false);
  }
}
