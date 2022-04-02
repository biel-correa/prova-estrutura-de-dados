import { Component, OnInit } from '@angular/core';
import { PresentationCardContent } from 'src/app/models/PresentationCardContent.model';

@Component({
  selector: 'app-pilha-page',
  templateUrl: './pilha-page.component.html',
  styleUrls: ['./pilha-page.component.scss'],
})
export class PilhaPageComponent implements OnInit {
  presentationCard: PresentationCardContent = {
    title: 'Pilha',
    description:
      'São estruturas de dados do tipo LIFO (last-in first-out), onde o último elemento a ser inserido, será o primeiro a ser retirado. Assim, uma pilha permite acesso a apenas um item de dados - o último inserido. Para processar o penúltimo item inserido, deve-se remover o último.',
  };

  constructor() {}

  ngOnInit(): void {}
}
