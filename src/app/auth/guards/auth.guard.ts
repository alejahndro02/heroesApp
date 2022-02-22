import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, 
         CanActivate, 
         CanLoad, 
         Route, 
         RouterStateSnapshot, 
         UrlSegment, 
         UrlTree } from '@angular/router';
import { AuthService } from '@auth/service/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanLoad {
  constructor(private authService: AuthService){}
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      
      if(this.authService.auth.id){
        return true;
      }
      console.log('Bloqueado por el AuthGuard');
      return false;
  }
}
