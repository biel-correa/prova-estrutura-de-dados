import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { PresentationCardContent } from 'src/app/models/PresentationCardContent.model';
import { CodeService } from 'src/app/services/code.service';

@Component({
  selector: 'app-fila-page',
  templateUrl: './fila-page.component.html',
  styleUrls: ['./fila-page.component.scss'],
})
export class FilaPageComponent implements OnInit {
  code: string;
  presentationCard: PresentationCardContent = {
    title: 'Fila',
    description:
      'São estruturas de dados do tipo FIFO (first-in first-out), onde o primeiro elemento a ser inserido, será o primeiro a ser retirado, ou seja, adiciona-se itens no fim e remove-se do início.',
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
      .getFilaCode()
      .pipe(
        tap((res) => {
          this.code = res;
          this.spinner.hide();
        })
      )
      .subscribe();
  }
}
