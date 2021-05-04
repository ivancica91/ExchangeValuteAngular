import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZahtjevCardComponent } from './zahtjev-card.component';

describe('ZahtjevCardComponent', () => {
  let component: ZahtjevCardComponent;
  let fixture: ComponentFixture<ZahtjevCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZahtjevCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZahtjevCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
