import { Observable } from 'rxjs';
import { Servico } from './clientes/Servico';
import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
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
}
