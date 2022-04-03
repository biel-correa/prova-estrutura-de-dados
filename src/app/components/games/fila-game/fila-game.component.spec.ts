import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilaGameComponent } from './fila-game.component';

describe('FilaGameComponent', () => {
  let component: FilaGameComponent;
  let fixture: ComponentFixture<FilaGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilaGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilaGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
