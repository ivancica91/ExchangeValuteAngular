import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSredstvaComponent } from './add-sredstva.component';

describe('AddSredstvaComponent', () => {
  let component: AddSredstvaComponent;
  let fixture: ComponentFixture<AddSredstvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSredstvaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSredstvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
