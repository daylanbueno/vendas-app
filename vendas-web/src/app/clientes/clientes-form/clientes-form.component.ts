import { ClienteService } from './../../cliente.service';
import { Cliente } from './../Cliente';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

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
    private router :Router,
    private activatedRoute:ActivatedRoute
    ) {
    this.cliente = new Cliente()
  }

  ngOnInit(): void {
      let params: Observable<Params> = this.activatedRoute.params
      params.subscribe(urlParams => {
         let id = urlParams['id']
         id && this.obterClientePorId(id)
      })
  }

  obterClientePorId(id: number) {
    this.clienteService.obterClientePorId(id)
    .subscribe(response => {
      this.cliente = response
    })
  }

  irParaFormularioListagem():void {
    this.router.navigate(['clientes/listagem'])
  }

  onSubmit() {
    !this.cliente.id && this.salvarNovoCliente()
    this.cliente.id && this.atualizarCliente()
  }

  salvarNovoCliente():void {
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

  atualizarCliente():void {
    this.success = false
    this.clienteService
        .atualizar(this.cliente)
        .subscribe((response) => {
          this.success = true
          this.cliente = response
          this.errors = null
        }, responseError => {
          this.errors = responseError.error.messages
        })
  }
}
