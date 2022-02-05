import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from '@error/error-page.component';

const routes: Routes = [
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path:'404', 
    component: ErrorPageComponent
  },
  {
    path:'**', 
    redirectTo:'404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
