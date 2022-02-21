import { Pipe, PipeTransform } from '@angular/core';
import { Heroe               } from "@interface/heroes.interface"

@Pipe({
  name: 'imagenHeroe'
})
export class ImagenHeroePipe implements PipeTransform {

  transform(supeHeroeImg: Heroe ): string{
    if( !supeHeroeImg.id && !supeHeroeImg.alt_img){
      return 'assets/no-image.png'
    }else if(supeHeroeImg.alt_img){
      return supeHeroeImg.alt_img
    }
    else{
      return `assets/heroes/${supeHeroeImg.id}.jpg`
    }
  }
}
