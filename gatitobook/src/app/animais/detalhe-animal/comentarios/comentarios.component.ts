import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovoUsuario } from './../../../home/novo-usuario/novo-usuario';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentarios } from './comentarios';
import { ComentariosService } from './comentarios.service';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  @Input() id!: number;
  comentarioForm! :FormGroup;
  tamanhoMaximo : string = 'Tamanho máximo de 300 caracteres'

  comentarios$!:Observable<Comentarios>;

  constructor(private formBuilder: FormBuilder,
              private comentarioService: ComentariosService
    ) { }

  ngOnInit(): void {

    this.comentarios$ = this.comentarioService.buscaComentario(this.id);

    this.comentarioForm = this.formBuilder.group({
        comentario: ['', [Validators.required, Validators.maxLength(300)]],
      })
  }

  gravar() {
    const comentario = this.comentarioForm.get('comentario')?.value ?? '';
    this.comentarios$ = this.comentarioService.incluirComentario(this.id, comentario).pipe(switchMap(() => this.comentarioService.buscaComentario(this.id)),
    tap(() => {
      this.comentarioForm.reset();
      alert('Salvo Comentário')
    })
    )
    }

}
