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
  termino:string="";
  superHeroes!: Heroe[];
  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }
  buscando(){
    // this.heroesService.getHeroes().subscribe(heroes=> this.superHeroes = heroes)
    this.heroesService.getSugerencias(this.termino).subscribe(heroes=> this.superHeroes = heroes)

  }
  opcionSeleccionada(event:MatAutocompleteSelectedEvent){
    console.log(event);
    
  }

}
