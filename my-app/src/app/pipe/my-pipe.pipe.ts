import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe',
  standalone: true,
})
export class MyPipePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return value.toUpperCase() + ' - Custom Pipe';
  }
}
