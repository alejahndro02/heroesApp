import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit      } from '@angular/core';
import { switchMap              } from 'rxjs/operators';
        
import { Heroe                  } from '@interface/heroes.interface';
import { HeroesService          } from '@heroes/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  `
  img{
    width:100%;
    border-radius:5px;
  }`
  ]
})
export class HeroeComponent implements OnInit {
  heroe!:Heroe
  constructor( private activatedRoute: ActivatedRoute, private heroesService: HeroesService, private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ( { id } ) => this.heroesService.getHeroesId(id))
    )
    .subscribe( heroe => this.heroe = heroe);
    }
  regresar(){
    this.router.navigate(['/heroes/listado'])
  }
}

