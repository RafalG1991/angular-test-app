import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countMore',
  standalone: true
})
export class CountMorePipe implements PipeTransform {

  transform(values: number[], threshold: number): number {
    return values.filter(val => val > threshold).length;
  }

}
