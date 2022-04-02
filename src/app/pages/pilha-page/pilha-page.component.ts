import { CodeService } from './../../services/code.service';
import { Component, OnInit } from '@angular/core';
import { PresentationCardContent } from 'src/app/models/PresentationCardContent.model';
import { tap } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-pilha-page',
  templateUrl: './pilha-page.component.html',
  styleUrls: ['./pilha-page.component.scss'],
})
export class PilhaPageComponent implements OnInit {
  code: string;
  presentationCard: PresentationCardContent = {
    title: 'Pilha',
    description:
      'São estruturas de dados do tipo LIFO (last-in first-out), onde o último elemento a ser inserido, será o primeiro a ser retirado. Assim, uma pilha permite acesso a apenas um item de dados - o último inserido. Para processar o penúltimo item inserido, deve-se remover o último.',
  };

  constructor(
    private codeService: CodeService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.getCode();
  }

  getCode(): void {
    this.spinner.show();
    this.codeService
      .getPilhaCode()
      .pipe(
        tap((res) => {
          this.code = res;
          this.spinner.hide();
        })
      )
      .subscribe();
  }
}
