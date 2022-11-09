import { ServicoPrestado } from './servico-prestado/servico-prestado-list/ServicoPrestado';
import { Observable } from 'rxjs';
import { Servico } from './clientes/Servico';
import { environment } from './../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {
  apiUrl: string = environment.urlBase
  constructor(
    private httpService: HttpClient
  ) { }

  salvar(servico: Servico): Observable<Servico> {
    return this.httpService.post<Servico>(`${this.apiUrl}/api/servicos`, servico)
  }

  consultar(nome, mes):Observable<ServicoPrestado[]> {
    const mesAtual = mes ?  mes.toString() : ''
    const params  = new HttpParams().set("nome", nome).set("mes", mesAtual)
    return this.httpService.get<ServicoPrestado[]>(`${this.apiUrl}/api/servicos?`+params.toString())
  }
}
