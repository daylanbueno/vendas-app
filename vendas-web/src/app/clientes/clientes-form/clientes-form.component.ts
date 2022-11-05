import { ClienteService } from './../../cliente.service';
import { Cliente } from './../Cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente
  success: boolean
  errors: string[]

  constructor(private clienteService: ClienteService) {
    this.cliente = new Cliente()
  }

  ngOnInit(): void {
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
