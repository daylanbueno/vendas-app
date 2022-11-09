import { ServicoPrestadoListComponent } from './servico-prestado-list/servico-prestado-list.component';
import { ServicoPrestadoComponent } from './servico-prestado/servico-prestado.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'servicos-form', component: ServicoPrestadoComponent },
  { path: 'servicos-listagem', component: ServicoPrestadoListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoPrestadoRoutingModule { }
