import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home', 
  },
  {
    path:'home',
    loadChildren:() => import('./home/home.module').then((m)=> m.HomeModule),
  },
  {
    path: 'eventos',
    loadChildren: () => import('./eventos/eventos.module').then((m) => m.EventosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
