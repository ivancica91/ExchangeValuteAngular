import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValutaDetailsComponent } from './valuta-details.component';

describe('ValutaDetailsComponent', () => {
  let component: ValutaDetailsComponent;
  let fixture: ComponentFixture<ValutaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValutaDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValutaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
