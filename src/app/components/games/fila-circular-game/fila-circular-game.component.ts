import { FilaCircularGameModel } from './../../../models/FilaCircularGame.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fila-circular-game',
  templateUrl: './fila-circular-game.component.html',
  styleUrls: ['./fila-circular-game.component.scss'],
})
export class FilaCircularGameComponent implements OnInit {
  tamanhoFila = 5;
  formGroup: FormGroup;
  filaCircular: FilaCircularGameModel = new FilaCircularGameModel(
    this.tamanhoFila
  );

  constructor() {}

  ngOnInit(): void {
    this.createFormControl();
  }

  adicionar() {
    if (this.formGroup.value.novoValor) {
      this.filaCircular.push(this.formGroup.value.novoValor);
      this.formGroup.reset();
    }
  }

  remover() {
    this.filaCircular.pop();
  }

  limpar() {
    this.filaCircular.clear();
  }

  mudarTamanhoFila() {
    this.tamanhoFila = this.formGroup.value.tamanho;
    this.filaCircular = new FilaCircularGameModel(this.tamanhoFila);
  }

  createFormControl() {
    this.formGroup = new FormGroup({
      novoValor: new FormControl(''),
      tamanho: new FormControl(this.tamanhoFila),
    });
  }
}
