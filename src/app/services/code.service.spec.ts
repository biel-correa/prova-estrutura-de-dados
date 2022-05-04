import {fakeAsync, TestBed} from '@angular/core/testing';

import { CodeService } from './code.service';
import {tap} from "rxjs";
import {HttpClientModule} from "@angular/common/http";

describe('CodeService', () => {
  let service: CodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(CodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load pilha code in under a second', fakeAsync(() => {
    service.getPilhaCode().pipe(
      tap((res) => {
        expect(res).toBeDefined();
      })
    )
  }));

  it('should load fila code in under a second', fakeAsync(() => {
    service.getFilaCode().pipe(
      tap((res) => {
        expect(res).toBeDefined();
      })
    )
  }));

  it('should load fila circular code in under a second', fakeAsync(() => {
    service.getFilaCircularCode().pipe(
      tap((res) => {
        expect(res).toBeDefined();
      })
    )
  }));

});
