import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesListComponent } from './clientes-list/clientes-list.component';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';

const routes: Routes = [
  { path: 'clientes-form', component: ClientesFormComponent },
  { path: 'clientes-list', component: ClientesListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
