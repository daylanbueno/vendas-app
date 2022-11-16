import { AuthGuard } from './../auth.guard';
import { LayoutComponent } from './../layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesListComponent } from './clientes-list/clientes-list.component';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';

const routes: Routes = [
  { path: 'clientes', component: LayoutComponent, canActivate: [AuthGuard], children: [
    { path: '', component: ClientesListComponent },
    { path: 'cadastro', component: ClientesFormComponent },
    { path: 'cadastro/:id', component: ClientesFormComponent },
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
