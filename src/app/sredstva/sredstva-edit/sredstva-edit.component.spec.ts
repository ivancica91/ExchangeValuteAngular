import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SredstvaEditComponent } from './sredstva-edit.component';

describe('SredstvaEditComponent', () => {
  let component: SredstvaEditComponent;
  let fixture: ComponentFixture<SredstvaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SredstvaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SredstvaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
