import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, of, retry, throwError} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);
  private API_URL = environment.API_URL;

  private handleError() {
    return (err: HttpErrorResponse) => {
      console.log(err);
      // return throwError(() => new Error('Something went wrong! Try again later!'));
      return of(null);
    }
  }

  get<R>(url: string) {
    return this.http.get<R>(`${this.API_URL}/${url}`)
      .pipe(
        retry(3),
        catchError(this.handleError())
      );
  }
}
