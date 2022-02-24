import { Injectable   } from '@angular/core';
import { HttpClient   } from '@angular/common/http';
import { Observable, 
         of           } from 'rxjs';
import { map, tap     } from 'rxjs/operators'
import { environment  } from 'src/environments/environment';
import { Auth         } from '@auth/intreface/auth.interface.';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private dataUrl: string = environment.dataUrl;
  private _auth: Auth | undefined;
  
  get auth(){
    return {...this._auth}
  }
  constructor(private http:HttpClient) { }

  verificacionAutenticacion():Observable<boolean>{
    
    if(!localStorage.getItem('token')){
      return of (false) 
    }
    return this.http.get<Auth>(`${this.dataUrl}/usuarios/1`)
           .pipe(
             map( auth => {
               this._auth = auth;
               console.log(map);
               return true;
             })
           )
  }
  logIn(){
    return this.http.get<Auth>(`${this.dataUrl}/usuarios/1`)
    .pipe(
      tap( auth => this._auth = auth),
      tap( auth => localStorage.setItem('token',auth.id))
    )
  }
  logOut(){
    this._auth = undefined
  }
}
