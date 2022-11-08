import { ServicoPrestadoComponent } from './../servico-prestado/servico-prestado/servico-prestado.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicoPrestadoRoutingModule } from './servico-prestado-routing.module';

@NgModule({
  declarations: [ServicoPrestadoComponent],
  imports: [
    CommonModule,
    ServicoPrestadoRoutingModule
  ], exports: [
    CommonModule,
    ServicoPrestadoRoutingModule
  ]
})
export class ServicoPrestadoModule { }
