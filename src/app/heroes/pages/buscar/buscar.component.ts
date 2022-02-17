import { Component, OnInit            } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe                        } from '@heroes/interface/heroes.interface';
import { HeroesService                } from '@heroes/services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {
  termino: string = '';
  superHeroes: Heroe[] = [];
  hereoSeleccionado!: Heroe | undefined;
  
  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }
  
  buscando(){
    this.heroesService.getSugerencias(this.termino.trim())
    .subscribe(heroes=> this.superHeroes = heroes)
  }

  opcionSeleccionada(event:MatAutocompleteSelectedEvent){

    if(!event.option.value){
      this.hereoSeleccionado = undefined
    return
 }
    const superHeroeSelected:Heroe = event.option.value
    
    this.termino = superHeroeSelected.superhero
    
    this.heroesService.getHeroesId(superHeroeSelected.id!)
      .subscribe( superHeroeSelected => this.hereoSeleccionado = superHeroeSelected ) 
  }

}
