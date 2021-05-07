import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZahtjeviSviComponent } from './zahtjevi-svi.component';

describe('ZahtjeviSviComponent', () => {
  let component: ZahtjeviSviComponent;
  let fixture: ComponentFixture<ZahtjeviSviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZahtjeviSviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZahtjeviSviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
