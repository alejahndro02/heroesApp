import { NgModule            } from '@angular/core';
import { CommonModule        } from '@angular/common';
import { AgregarComponent    } from '@agregar/agregar.component';
import { BuscarComponent     } from '@buscar/buscar.component';
import { HeroeComponent      } from '@heroe/heroe.component';
import { HeroesHomeComponent } from '@heroes-home/heroes-home.component';
import { ListadoComponent    } from '@listado/listado.component';

@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    HeroesHomeComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule { }
