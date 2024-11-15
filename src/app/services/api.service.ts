import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, of, retry, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);

  get<R>(url: string) {
    return this.http.get<R>(url)
      .pipe(
        retry(3),
        catchError(err => {
          console.log(err);

          // return throwError(() => new Error('Something went wrong! Try again later!'));
          return of(null);
        })
      );
  }
}
