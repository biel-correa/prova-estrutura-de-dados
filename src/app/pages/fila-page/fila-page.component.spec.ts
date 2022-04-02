import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilaPageComponent } from './fila-page.component';

describe('FilaPageComponent', () => {
  let component: FilaPageComponent;
  let fixture: ComponentFixture<FilaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilaPageComponent ]
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
