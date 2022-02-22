import { Component, OnInit } from '@angular/core';
import { Router            } from '@angular/router';

import { Auth              } from '@auth/intreface/auth.interface.';
import { AuthService       } from '@auth/service/auth.service';

@Component({
  selector: 'app-heroes-home',
  templateUrl: './heroes-home.component.html',
  styles: [
    `.container{
      margin:10px
    }`
  ]
})
export class HeroesHomeComponent implements OnInit {
  get auth(){
    return this.authService.auth
  }
  constructor(private router:Router,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.auth.id
  }
  logOut(){

    this.router.navigate(['auth'])
  }

}
