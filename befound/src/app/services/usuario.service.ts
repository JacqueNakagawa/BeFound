import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  SERVER_URL = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  public postUsuario() {
    return this.http.get(`${this.SERVER_URL}/novoUsuario`)
  }
}
