import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Usuario } from './login/usuario';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: String = environment.urlBase
  private clientID: string = environment.clienteId;
  private clientSecret: string = environment.clienteSecret;
  private jwtHelper: JwtHelperService =  new JwtHelperService()

  constructor(
    private httpclient: HttpClient
  ) { }

  salvar(usuario: Usuario):Observable<any> {
    return this.httpclient.post<any>(`${this.apiUrl}/api/usuarios`, usuario)
  }

  private objterToken() {
    const tokenString =  localStorage.getItem('access_token')

    if (!tokenString) return null

    const token = JSON.parse(tokenString)

    return token.access_token
  }

  isAutenticate(): boolean {
    const token = this.objterToken()

    if (!token) { return false }

    return !this.jwtHelper.isTokenExpired(token)
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
