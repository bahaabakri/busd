import { ElementRef, Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'manipulateCat'})

export class ManipulateCategoryPipe implements PipeTransform {
  transform(value:string, element: HTMLDivElement): string {
    switch(value) {
        case 'xXx' :
            element.style.color = 'red'
            break;
        case 'xGold' :
            element.style.color = 'orange'
            break;
        case 'x3' :
            element.style.color = 'green'
            break;
        case 'x4' :
            element.style.color = 'blue'
            break;
        default :
            break;

    }
    return value
    
  }
}