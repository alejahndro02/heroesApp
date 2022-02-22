import { Injectable   } from '@angular/core';
import { HttpClient   } from '@angular/common/http';
import { tap          } from 'rxjs';

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
  
  logIn(){
    return this.http.get<Auth>(`${this.dataUrl}/usuarios/1`)
    .pipe(
      tap( auth => this._auth = auth)
    )
  }
  logOut(){
    this._auth = undefined
  }
}
