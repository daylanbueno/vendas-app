import { environment } from './../environments/environment';
import { Cliente } from './clientes/Cliente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {
  apiUrl: string = environment.urlBase

  constructor(private httpService: HttpClient) {}

  salvar(cliente:Cliente):Observable<Cliente> {
    return this.httpService.post<Cliente>(`${this.apiUrl}/api/clientes`, cliente)
  }

  recuperarTodosClientes():Observable<Cliente[]> {
    return this.httpService.get<Cliente[]>(`${this.apiUrl}/api/clientes`)
  }

  obterClientePorId(id:number):Observable<Cliente> {
    return this.httpService.get<Cliente>(`${this.apiUrl}/api/clientes/${id}`)
  }

  atualizar(cliente:Cliente):Observable<Cliente> {
    return this.httpService.put<Cliente>(`${this.apiUrl}/api/clientes/${cliente.id}`, cliente)
  }

  deletarClientePorId(id: number):Observable<any> {
    return this.httpService.delete<any>(`${this.apiUrl}/api/clientes/${id}`)
  }
}
