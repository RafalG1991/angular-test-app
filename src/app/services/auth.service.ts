import {Injectable, signal} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isAuthenticated = signal<boolean>(false);
  private _isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  public isAuthenticated = this._isAuthenticated.asReadonly();
  public isAuthenticatedSubject = this._isAuthenticatedSubject.asObservable();

  login() {
    this._isAuthenticated.set(true);
  }

  loginSubject() {
    this._isAuthenticatedSubject.next(true);
  }

  logout() {
    this._isAuthenticated.set(false);
  }

  logoutSubject() {
    this._isAuthenticatedSubject.next(false);
  }
}
