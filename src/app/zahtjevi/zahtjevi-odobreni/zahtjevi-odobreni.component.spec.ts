import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZahtjeviOdobreniComponent } from './zahtjevi-odobreni.component';

describe('ZahtjeviOdobreniComponent', () => {
  let component: ZahtjeviOdobreniComponent;
  let fixture: ComponentFixture<ZahtjeviOdobreniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZahtjeviOdobreniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZahtjeviOdobreniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
