import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CodeService {
  constructor(private http: HttpClient) {}

  getFilaCode() {
    return this.http.get('assets/code/fila.py', { responseType: 'text' });
  }

  getPilhaCode() {
    return this.http.get('assets/code/pilha.py', { responseType: 'text' });
  }

  getFilaCircularCode() {
    return this.http.get('assets/code/filaCircular.py', {
      responseType: 'text',
    });
  }
}
