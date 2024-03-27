import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovoUsuarioService } from './novo-usuario.service';
import { NovoUsuario } from './novo-usuario';
import { minusculoValidator } from './minusculoValidator';
import { UsuarioExisteService } from './usuario-existe.service';
import { usuarioSenhaIguaisValidator } from './usuario-senha-iguais.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioForm!: FormGroup;
  mensagemEmail: string = 'Email é obrigatório'
  erroEmail: string = 'Email no formato incorreto'
  nomeIncorreto: string = 'Nome incorreto'
  mensagemUsuario: string ="Usuario deve ser em letra minúscula"
  mensagemUsuarioJaExiste: string ="Usuario já existe"
  erroSenha: string ="Senha deve ser diferente do usuário"

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private usuarioExistenteService : UsuarioExisteService,
    private router: Router
     ) { }

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      userName: ['', [minusculoValidator], [this.usuarioExistenteService.usuarioJaExiste()]],
      password: [''],
    }, {
      validators: [usuarioSenhaIguaisValidator]
    }
    );
  }

  cadastrar() {
    if(this.novoUsuarioForm.valid) {
      const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
      this.novoUsuarioService.cadastraNovoUsuario(novoUsuario).subscribe(() => {
        this.router.navigate(['']);
      },
      (error) => {
        console.log(error)
      }
      )
    }

  }
}
