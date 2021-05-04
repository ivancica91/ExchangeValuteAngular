import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZahtjeviDetailsComponent } from './zahtjevi-details.component';

describe('ZahtjeviDetailsComponent', () => {
  let component: ZahtjeviDetailsComponent;
  let fixture: ComponentFixture<ZahtjeviDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZahtjeviDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZahtjeviDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
