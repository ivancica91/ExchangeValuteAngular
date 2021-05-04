import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuteListComponent } from './valute-list.component';

describe('ValuteListComponent', () => {
  let component: ValuteListComponent;
  let fixture: ComponentFixture<ValuteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValuteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
