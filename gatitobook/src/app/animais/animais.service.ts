import { TokenService } from './../autenticacao/token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animais, Animal } from './animais';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  constructor(private http: HttpClient, private TokenService: TokenService) { }

  listaDoUsuario( nomeDoUsuario:string ): Observable<Animais> {
      const token = this.TokenService.retornaToken();
      const headers = new HttpHeaders().append('x-access-token', token)
      return this.http.get<Animais>(`${API}/${nomeDoUsuario}/photos`, {headers: headers});
  }

  buscarPorId(id: number): Observable<Animal> {
  const token = this.TokenService.retornaToken();
  const headers = new HttpHeaders().append('x-access-token', token);
  return this.http.get<Animal>(`${API}/photos/${id}`, {headers} )
}
}
