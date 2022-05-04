import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilaPageComponent } from './fila-page.component';
import {HttpClientModule} from "@angular/common/http";

describe('FilaPageComponent', () => {
  let component: FilaPageComponent;
  let fixture: ComponentFixture<FilaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilaPageComponent ],
      imports: [HttpClientModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
