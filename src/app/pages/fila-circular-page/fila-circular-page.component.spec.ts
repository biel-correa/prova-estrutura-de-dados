import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilaCircularPageComponent } from './fila-circular-page.component';
import {HttpClientModule} from "@angular/common/http";

describe('FilaCircularPageComponent', () => {
  let component: FilaCircularPageComponent;
  let fixture: ComponentFixture<FilaCircularPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilaCircularPageComponent ],
      imports: [HttpClientModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilaCircularPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
