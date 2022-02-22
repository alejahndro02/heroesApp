import { HttpClient   } from '@angular/common/http';
import { Injectable   } from '@angular/core';
import { environment  } from 'src/environments/environment';
import { Auth         } from '@auth/intreface/auth.interface.';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private dataUrl: string = environment.dataUrl;

  constructor(private http:HttpClient) { }
  
  logIn(){
    return this.http.get<Auth>(`${this.dataUrl}/usuarios/1`);
  }

}
