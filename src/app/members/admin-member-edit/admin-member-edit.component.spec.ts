import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMemberEditComponent } from './admin-member-edit.component';

describe('AdminMemberEditComponent', () => {
  let component: AdminMemberEditComponent;
  let fixture: ComponentFixture<AdminMemberEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMemberEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMemberEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
