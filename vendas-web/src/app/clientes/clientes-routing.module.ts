import { LayoutComponent } from './../layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesListComponent } from './clientes-list/clientes-list.component';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';

const routes: Routes = [
  { path: 'clientes', component: LayoutComponent, children: [
    { path: '', redirectTo: 'clientes/listagem', pathMatch: 'full' },
    { path: 'form', component: ClientesFormComponent },
    { path: 'form/:id', component: ClientesFormComponent },
    { path: 'listagem', component: ClientesListComponent },
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
