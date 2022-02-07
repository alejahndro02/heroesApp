import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenHeroe'
})
export class ImagenHeroePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
