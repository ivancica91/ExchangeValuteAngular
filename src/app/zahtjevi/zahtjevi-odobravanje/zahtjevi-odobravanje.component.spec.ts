import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZahtjeviOdobravanjeComponent } from './zahtjevi-odobravanje.component';

describe('ZahtjeviOdobravanjeComponent', () => {
  let component: ZahtjeviOdobravanjeComponent;
  let fixture: ComponentFixture<ZahtjeviOdobravanjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZahtjeviOdobravanjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZahtjeviOdobravanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
