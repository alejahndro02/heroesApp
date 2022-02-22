import { Component, OnInit } from '@angular/core';
import { Router            } from '@angular/router';

import { AuthService       } from '@auth/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})

export class LoginComponent implements OnInit {

  constructor( private router:Router,
               private authService:AuthService) { }

  ngOnInit(): void {
  }
 logIn(){
   this.authService.logIn().subscribe(auth =>{
     if(auth.id){
       this.router.navigate(['/heroes'])
     }
   })
 }
 logInUnRegistred(){
   this.authService.logOut();
   this.router.navigate(['/heroes'])
 }
}
