import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { AuthService } from './../auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string
  password: string
  seCadastrando:boolean = false
  sucessoCadastro: boolean = false
  errors: string []
  constructor(
    private authService: AuthService,
    private route: Router
  ) { }

  onSubmit() {
    this.authService
        .efetuarLogin(this.username, this.password)
        .subscribe(response => {
            console.log('token', response)
            this.route.navigate(['/'])
        }, errorResponse => {
          this.errors  = ['Usuário ou senha invalido']
        })
  }

  cadastrar(): void {
    const usuario: Usuario = new Usuario()
    this.sucessoCadastro = false
    usuario.username = this.username
    usuario.password = this.password
    this.authService
        .salvar(usuario)
        .subscribe(() => {
          this.sucessoCadastro = true
        }, responseError => {
          this.sucessoCadastro = false
           this.errors = responseError.error.errors
        })
  }

  irCadastro(event) {
    event.preventDefault()
    this.seCadastrando = true
  }

  CancelarCadastro() {
    this.seCadastrando = false
    this.username = null
    this.password = null
    this.errors = null
    this.sucessoCadastro = null
  }
}

