import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddZahtjevComponent } from './add-zahtjev.component';

describe('AddZahtjevComponent', () => {
  let component: AddZahtjevComponent;
  let fixture: ComponentFixture<AddZahtjevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddZahtjevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddZahtjevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
