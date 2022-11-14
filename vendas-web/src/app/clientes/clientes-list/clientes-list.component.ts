import { Router } from '@angular/router';
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
  clienteSelecionado: Cliente
  messageSuccess: string
  messageError: string

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.recuperarTodosClientes()
  }

  irParaFormularioCadastro(): void {
    this.router.navigate(['clientes/cadastro'])
  }

  recuperarTodosClientes(): void {
    this.clienteService.recuperarTodosClientes()
    .subscribe(response => {
      this.clientes = response
    })
  }

  handleSelecionarCliente(cliente:Cliente):void {
    this.clienteSelecionado = cliente
  }

  handleDeleteClientePorId() {
    this.clienteService
        .deletarClientePorId(this.clienteSelecionado.id)
        .subscribe(() => {
          this.messageSuccess = "Operação realizada com sucesso!"
          this.recuperarTodosClientes()
        },() => {
          this.messageError = "Ocorreu um erro ao tentar apagar o registro!"
        })
  }

}
