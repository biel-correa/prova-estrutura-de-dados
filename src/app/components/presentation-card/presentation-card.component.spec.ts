import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PresentationCardComponent} from './presentation-card.component';
import {HttpClientModule} from "@angular/common/http";

describe('PresentationCardComponent', () => {
  let component: PresentationCardComponent;
  let fixture: ComponentFixture<PresentationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationCardComponent ],
      imports: [HttpClientModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationCardComponent);
    component = fixture.componentInstance;
    component.data = {
      title: 'simple title',
      description: 'simple description',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
