import { ClienteService } from './../../cliente.service';
import { Cliente } from './../Cliente';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente
  success: boolean
  errors: string[]

  constructor(
    private clienteService: ClienteService,
    private router :Router
    ) {
    this.cliente = new Cliente()
  }

  ngOnInit(): void {
  }

  irParaFormularioListagem():void {
    this.router.navigate(['clientes-list'])
  }

  onSubmit() {
    this.success = false
    this.clienteService
        .salvar(this.cliente)
        .subscribe((response) => {
          this.success = true
          this.cliente = response
          this.errors = null
        }, responseError => {
        this.errors = responseError.error.messages
        })
  }
}
