import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilhaPageComponent } from './pilha-page.component';

describe('PilhaPageComponent', () => {
  let component: PilhaPageComponent;
  let fixture: ComponentFixture<PilhaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilhaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PilhaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
