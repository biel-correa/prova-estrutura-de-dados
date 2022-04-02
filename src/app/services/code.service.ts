import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CodeService {
  constructor(private http: HttpClient) {}

  getFilaCode<T>(): Observable<T> {
    return this.http.get<T>('assets/code/fila.py');
  }

  getPilhaCode() {
    return this.http.get('assets/code/pilha.py', { responseType: 'text' });
  }
}
