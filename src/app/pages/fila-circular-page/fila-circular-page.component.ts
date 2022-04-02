import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { PresentationCardContent } from 'src/app/models/PresentationCardContent.model';
import { CodeService } from 'src/app/services/code.service';

@Component({
  selector: 'app-fila-circular-page',
  templateUrl: './fila-circular-page.component.html',
  styleUrls: ['./fila-circular-page.component.scss'],
})
export class FilaCircularPageComponent implements OnInit {
  code: string;
  presentationCard: PresentationCardContent = {
    title: 'Fila Circular',
    description:
      'Neste tipo de estrutura, não é atribuído um comprimento fixo, pois seu tamanho limite é a capacidade de memória, onde é muito difícil ocupá-la totalmente. As estruturas mais utilizadas são as filas, pilhas, listas, tabelas de espalhamento e árvores.',
  };

  constructor(private codeService: CodeService) {}

  ngOnInit(): void {
    this.getCode();
  }

  getCode(): void {
    this.codeService
      .getFilaCircularCode()
      .pipe(
        tap((res) => {
          this.code = res;
        })
      )
      .subscribe();
  }
}
