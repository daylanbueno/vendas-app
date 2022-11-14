import { ServicoPrestadoListComponent } from './../servico-prestado/servico-prestado-list/servico-prestado-list.component';
import { ServicoPrestadoComponent } from './../servico-prestado/servico-prestado/servico-prestado.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicoPrestadoRoutingModule } from './servico-prestado-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ServicoPrestadoComponent],
  imports: [
    CommonModule,
    ServicoPrestadoRoutingModule,
    FormsModule
  ], exports: [
    ServicoPrestadoComponent,
    ServicoPrestadoListComponent
  ]
})
export class ServicoPrestadoModule { }
