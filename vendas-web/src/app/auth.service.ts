import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Usuario } from './login/usuario';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: String = environment.urlBase
  private clientID: string = environment.clienteId;
  private clientSecret: string = environment.clienteSecret;

  constructor(
    private httpclient: HttpClient
  ) { }

  salvar(usuario: Usuario):Observable<any> {
    return this.httpclient.post<any>(`${this.apiUrl}/api/usuarios`, usuario)
  }

  efetuarLogin(username:string, password: string): Observable<any> {
    const params  = new HttpParams()
                          .set('username', username)
                          .set('password', password)
                          .set('grant_type', "password")
    const headers = {
      'Authorization': 'Basic ' + btoa(`${this.clientID}:${this.clientSecret}`),
      'Content-Type': 'application/x-www-form-urlencoded'
    }

    return this.httpclient.post<any>(`${this.apiUrl}/oauth/token`, params.toString(), { headers })
  }
}
