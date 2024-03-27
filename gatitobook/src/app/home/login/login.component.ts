import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string = '';
  senha: string = '';


  constructor(
     private service: AutenticacaoService,
     private router: Router) { }

mensagem : string = 'Usuário obrigatório'
mensagemSenha : string = 'Senha é obrigatório'


  ngOnInit(): void {
  }

  login() {
    console.log(this.usuario);
    console.log(this.senha);
    const conjunto = [
      this.usuario, this.senha
    ]
    // console.log( conjunto)
    this.service.autenticar(this.usuario, this.senha ).subscribe(()=> {
      this.router.navigate(['animais'])
    }, (error)=> {
      alert("Usuário ou senha inválido");
      console.log(error)
    })
  }

}
