import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'check',
  standalone: true
})
export class CheckPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
