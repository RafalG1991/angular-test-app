import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, of, retry, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);

  private handleError() {
    return (err: HttpErrorResponse) => {
      console.log(err);
      // return throwError(() => new Error('Something went wrong! Try again later!'));
      return of(null);
    }
  }

  get<R>(url: string) {
    return this.http.get<R>(url)
      .pipe(
        retry(3),
        catchError(this.handleError())
      );
  }
}
