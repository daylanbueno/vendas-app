import { ServicoPrestadoService } from './servico-prestado.service';
import { ServicoPrestadoModule } from './servico-prestado/servico-prestado.module';
import { ClienteService } from './cliente.service';
import { ClientesModule } from './clientes/clientes.module';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientesModule,
    ServicoPrestadoModule
  ],
  providers: [
    ClienteService,
    ServicoPrestadoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
