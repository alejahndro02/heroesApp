import { Input             } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Heroe             } from '@interface/heroes.interface';
import { HeroesService     } from '@heroes/services/heroes.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styles: [
    `mat-card{
      margin-top:20px
    }`
  ]
})
export class TarjetaComponent implements OnInit {
  @Input() superHeroe! : Heroe
  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

}
