import { AuthGuard } from './../auth.guard';
import { LayoutComponent } from './../layout/layout.component';
import { ServicoPrestadoListComponent } from './servico-prestado-list/servico-prestado-list.component';
import { ServicoPrestadoComponent } from './servico-prestado/servico-prestado.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'servicos', component: LayoutComponent, canActivate: [AuthGuard], children: [
    { path: '', component: ServicoPrestadoListComponent },
    { path: 'cadastro', component: ServicoPrestadoComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoPrestadoRoutingModule { }
