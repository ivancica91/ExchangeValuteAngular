import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValutaCardComponent } from './valuta-card.component';

describe('ValutaCardComponent', () => {
  let component: ValutaCardComponent;
  let fixture: ComponentFixture<ValutaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValutaCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValutaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
