import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CodeService {
  apiLink =
    'https://raw.githubusercontent.com/biel-correa/prova-estrutura-de-dados/main/src/assets/code/';
  constructor(private http: HttpClient) {}

  getFilaCode() {
    return this.http.get(`${this.apiLink}/fila.py`, { responseType: 'text' });
  }

  getPilhaCode() {
    return this.http.get(`${this.apiLink}/pilha.py`, { responseType: 'text' });
  }

  getFilaCircularCode() {
    return this.http.get(`${this.apiLink}/filaCircular.py`, {
      responseType: 'text',
    });
  }
}
