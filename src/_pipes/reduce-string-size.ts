import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'reduceStringSize'})

export class ReduceStringSize implements PipeTransform {
  transform(value: string, shift = 5, end =3): string {
    return value.slice(0, shift) + '...' + value.slice(-end)
  }
}