import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEnventosComponent } from './lista-enventos/lista-enventos.component';

const routes: Routes = [
  {
    path: '',
    component: ListaEnventosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventosRoutingModule { }
