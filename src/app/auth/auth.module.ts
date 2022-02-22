import { NgModule          } from '@angular/core';
import { CommonModule      } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent    } from '@login/login.component';
import { RegistroComponent } from '@registro/registro.component';
import { AMaterialModule   } from '@amaterial/a-material.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule, 
    AMaterialModule
  ]
})
export class AuthModule { }
