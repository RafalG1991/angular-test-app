import {Injectable, signal, Signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValuesService {
  private _values = signal<number[]>([]);

  public values = this._values.asReadonly();

  addNewValue(value: number) {
    this._values.update(prev => [...prev, value]);
  }
}
