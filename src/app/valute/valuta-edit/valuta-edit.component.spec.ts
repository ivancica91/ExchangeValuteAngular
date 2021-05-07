import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValutaEditComponent } from './valuta-edit.component';

describe('ValutaEditComponent', () => {
  let component: ValutaEditComponent;
  let fixture: ComponentFixture<ValutaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValutaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValutaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
