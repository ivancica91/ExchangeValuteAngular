import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberEditRoleComponent } from './member-edit-role.component';

describe('MemberEditRoleComponent', () => {
  let component: MemberEditRoleComponent;
  let fixture: ComponentFixture<MemberEditRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberEditRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberEditRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
