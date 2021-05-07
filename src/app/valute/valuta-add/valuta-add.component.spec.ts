import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValutaAddComponent } from './valuta-add.component';

describe('ValutaAddComponent', () => {
  let component: ValutaAddComponent;
  let fixture: ComponentFixture<ValutaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValutaAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValutaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
