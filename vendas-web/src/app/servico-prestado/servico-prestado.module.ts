import { ServicoPrestadoListComponent } from '../servico-prestado/servico-prestado-list/servico-prestado-list.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicoPrestadoRoutingModule } from './servico-prestado-routing.module';
import { ServicoPrestadoComponent } from './servico-prestado/servico-prestado.component';


@NgModule({
  declarations: [ServicoPrestadoComponent, ServicoPrestadoListComponent],
  imports: [
    CommonModule,
    ServicoPrestadoRoutingModule,
    FormsModule
  ], exports: [
    CommonModule,
    ServicoPrestadoRoutingModule,
    ServicoPrestadoComponent,
    ServicoPrestadoListComponent
  ]
})
export class ServicoPrestadoModule { }
