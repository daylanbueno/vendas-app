import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicoPrestadoRoutingModule } from './servico-prestado-routing.module';
import { ServicoPrestadoComponent } from './servico-prestado/servico-prestado.component';


@NgModule({
  declarations: [ServicoPrestadoComponent],
  imports: [
    CommonModule,
    ServicoPrestadoRoutingModule,
    FormsModule
  ], exports: [
    CommonModule,
    ServicoPrestadoRoutingModule,
    ServicoPrestadoComponent
  ]
})
export class ServicoPrestadoModule { }
