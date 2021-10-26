import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosRoutingModule } from './eventos-routing.module';
import { ListaEnventosComponent } from './lista-enventos/lista-enventos.component';


@NgModule({
  declarations: [
    ListaEnventosComponent
  ],
  imports: [
    CommonModule,
    EventosRoutingModule
  ]
})
export class EventosModule { }
