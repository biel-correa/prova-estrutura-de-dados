import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilaCircularGameComponent } from './fila-circular-game.component';

describe('FilaCircularGameComponent', () => {
  let component: FilaCircularGameComponent;
  let fixture: ComponentFixture<FilaCircularGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilaCircularGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilaCircularGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
