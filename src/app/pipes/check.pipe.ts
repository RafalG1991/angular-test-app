import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'check',
  standalone: true
})
export class CheckPipe implements PipeTransform {

  transform(value: string, substring: string): 'contain' | 'does not contain' {
    return value.includes(substring) ? 'contain' : 'does not contain';
  }

}
