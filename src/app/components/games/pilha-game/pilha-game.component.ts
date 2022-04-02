import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PilhaGameModel } from 'src/app/models/PilhaGame.model';

@Component({
  selector: 'app-pilha-game',
  templateUrl: './pilha-game.component.html',
  styleUrls: ['./pilha-game.component.scss'],
})
export class PilhaGameComponent implements OnInit {
  formGroup: FormGroup;
  pilha: PilhaGameModel = new PilhaGameModel();

  constructor() {}

  ngOnInit(): void {
    this.createFormControl();
  }

  adicionar() {
    if (this.formGroup.value.novoValor) {
      this.pilha.push(this.formGroup.value.novoValor);
      this.formGroup.reset();
    }
  }

  remover() {
    this.pilha.pop();
  }

  limpar() {
    this.pilha.clear();
  }

  createFormControl() {
    this.formGroup = new FormGroup({
      novoValor: new FormControl(''),
    });
  }
}
