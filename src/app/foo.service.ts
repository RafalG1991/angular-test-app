import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FooService {
  private value = Math.round(Math.random() * 1000);

  getValue() {
    return this.value;
  }
}
