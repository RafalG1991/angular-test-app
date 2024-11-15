import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);

  get<R>(url: string) {
    return this.http.get<R>(url)
      .pipe(
        retry(3)
      );
  }
}
