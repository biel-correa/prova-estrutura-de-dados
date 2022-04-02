import { Component, OnInit } from '@angular/core';
import { PresentationCardContent } from 'src/app/models/PresentationCardContent.model';

@Component({
  selector: 'app-fila-page',
  templateUrl: './fila-page.component.html',
  styleUrls: ['./fila-page.component.scss'],
})
export class FilaPageComponent implements OnInit {
  presentationCard: PresentationCardContent = {
    title: 'Fila',
    description:
      'São estruturas de dados do tipo FIFO (first-in first-out), onde o primeiro elemento a ser inserido, será o primeiro a ser retirado, ou seja, adiciona-se itens no fim e remove-se do início.',
  };

  constructor() {}

  ngOnInit(): void {}
}
