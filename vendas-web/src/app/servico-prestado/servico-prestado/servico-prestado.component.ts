import { Router } from '@angular/router';
import { ServicoPrestadoService } from './../../servico-prestado.service';
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
  success: boolean = false
  errors: string[]

  constructor(
    private clienteServico: ClienteService,
    private servicoPrestado: ServicoPrestadoService,
    private router: Router
  ) {
    this.servico = new Servico()
  }

  ngOnInit(): void {
    this.recuperarClientes()
  }

  irParaCadastro(): void {
    this.router.navigate(['servicos'])
  }

  recuperarClientes():void {
    this.clienteServico
        .recuperarTodosClientes()
        .subscribe(response => {
          this.clientes = response
        })
  }

  onSubmit():void {
    this.servicoPrestado
        .salvar(this.servico)
        .subscribe(response => {
          this.servico = response
          this.success = true
          this.errors = null
          this.servico = new Servico()
        }, responseError => {
          this.errors = responseError.error.messages;
        })
  }


}
