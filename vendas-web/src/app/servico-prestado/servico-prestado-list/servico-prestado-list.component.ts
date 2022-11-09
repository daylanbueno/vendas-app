import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServicoPrestadoService } from 'src/app/servico-prestado.service';
import { ServicoPrestado } from './ServicoPrestado';

@Component({
  selector: 'app-servico-prestado-list',
  templateUrl: './servico-prestado-list.component.html',
  styleUrls: ['./servico-prestado-list.component.css']
})
export class ServicoPrestadoListComponent implements OnInit {

  nome:string
  meses: number[]
  mes:number
  servicos: ServicoPrestado[]
  message: string

  constructor(
    private servicoPrestado: ServicoPrestadoService,
    private router: Router
  ) {
    this.meses = [1,2,3,4,5,6,7,8,9,10,11,12]
  }

  ngOnInit(): void {
  }

  irParaFormularioCadastro():void {
    this.router.navigate(['servicos-form'])
  }


  consultar():void {
    this.servicoPrestado
        .consultar(this.nome, this.mes)
        .subscribe(response => {
          if (response.length == 0 ) {
            this.message = "Registro não encontrado!"
          } else {
            this.message = null
          }
          this.servicos = response
        })
  }
}
