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
  errorCadastro: boolean = false
  constructor() { }

  onSubmit() {
    console.log(`username: ${this.username} - password: ${this.password}`)
  }

  irCadastro(event) {
    event.preventDefault()
    this.seCadastrando = true
  }

  CancelarCadastro() {
    this.seCadastrando = false
    this.username = null
    this.password = null
  }
}

