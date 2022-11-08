import { Servico } from './../../clientes/Servico';
import { ClienteService } from './../../cliente.service';
import { Cliente } from './../../clientes/Cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servico-prestado',
  templateUrl: './servico-prestado.component.html',
  styleUrls: ['./servico-prestado.component.css']
})
export class ServicoPrestadoComponent implements OnInit {
  clientes: Cliente[]
  servico: Servico

  constructor(
    private clienteServico: ClienteService
  ) {
    this.servico = new Servico()
  }

  ngOnInit(): void {
    this.recuperarClientes()
  }

  recuperarClientes():void {
    this.clienteServico
        .recuperarTodosClientes()
        .subscribe(response => {
          this.clientes = response
        })
  }

  onSubmit():void {
    console.log(this.servico)
  }

}
