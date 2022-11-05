import { Cliente } from './clientes/Cliente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private httpService: HttpClient) {}

  salvar(cliente:Cliente):Observable<Cliente> {
    return this.httpService.post<Cliente>('http://localhost:8181/api/clientes', cliente)
  }

  recuperarTodosClientes():Observable<Cliente[]> {
    return this.httpService.get<Cliente[]>('http://localhost:8181/api/clientes')
  }

}
