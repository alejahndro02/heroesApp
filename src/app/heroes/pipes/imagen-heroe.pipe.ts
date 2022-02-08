import { Pipe, PipeTransform } from '@angular/core';
import { Heroe               } from "@interface/heroes.interface"

@Pipe({
  name: 'imagenHeroe'
})
export class ImagenHeroePipe implements PipeTransform {

  transform(supeHeroeImg: Heroe ): string{
    return `assets/heroes/${supeHeroeImg.id}.jpg`
  }

}
