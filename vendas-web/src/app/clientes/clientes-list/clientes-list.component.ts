import { ClienteService } from './../../cliente.service';
import { Component, OnInit } from '@angular/core';

import { Cliente } from './../Cliente';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {

  clientes: Cliente[]

  constructor(
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.recuperarTodosClientes()
  }


  recuperarTodosClientes(): void {
    this.clienteService.recuperarTodosClientes()
    .subscribe(response => {
      this.clientes = response
    })
  }


}
