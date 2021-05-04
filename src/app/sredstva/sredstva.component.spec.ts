import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SredstvaComponent } from './sredstva.component';

describe('SredstvaComponent', () => {
  let component: SredstvaComponent;
  let fixture: ComponentFixture<SredstvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SredstvaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SredstvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
