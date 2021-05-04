import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SredstvaCardComponent } from './sredstva-card.component';

describe('SredstvaCardComponent', () => {
  let component: SredstvaCardComponent;
  let fixture: ComponentFixture<SredstvaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SredstvaCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SredstvaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
