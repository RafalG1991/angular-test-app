import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countLess',
  standalone: true
})
export class CountLessPipe implements PipeTransform {

  transform(values: number[], threshold: number): number {
    return values.filter(val => val < threshold).length;
  }

}
