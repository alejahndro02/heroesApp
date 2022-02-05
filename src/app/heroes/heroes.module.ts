import { NgModule            } from '@angular/core';
import { CommonModule        } from '@angular/common';
import { FlexLayoutModule    } from '@angular/flex-layout';

import { AMaterialModule     } from '@amaterial/a-material.module';
import { HeroesRoutingModule } from '@heroes/heroes-routing.module'

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
    CommonModule,
    FlexLayoutModule,
    AMaterialModule,
    HeroesRoutingModule,
  ]
})
export class HeroesModule { }
