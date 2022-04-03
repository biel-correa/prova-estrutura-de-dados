import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FilaGameModel } from 'src/app/models/FilaGame.model';

@Component({
  selector: 'app-fila-game',
  templateUrl: './fila-game.component.html',
  styleUrls: ['./fila-game.component.scss'],
})
export class FilaGameComponent implements OnInit {
  formGroup: FormGroup;
  fila: FilaGameModel = new FilaGameModel();

  constructor() {}

  ngOnInit(): void {
    this.createFormControl();
  }

  adicionar() {
    if (this.formGroup.value.novoValor) {
      this.fila.push(this.formGroup.value.novoValor);
      this.formGroup.reset();
    }
  }

  remover() {
    this.fila.pop();
  }

  limpar() {
    this.fila.clear();
  }

  createFormControl() {
    this.formGroup = new FormGroup({
      novoValor: new FormControl(''),
    });
  }
}
