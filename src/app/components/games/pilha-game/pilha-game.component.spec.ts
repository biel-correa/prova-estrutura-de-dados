import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilhaGameComponent } from './pilha-game.component';

describe('PilhaGameComponent', () => {
  let component: PilhaGameComponent;
  let fixture: ComponentFixture<PilhaGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilhaGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PilhaGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
