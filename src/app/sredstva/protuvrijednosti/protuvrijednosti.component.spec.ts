import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtuvrijednostiComponent } from './protuvrijednosti.component';

describe('ProtuvrijednostiComponent', () => {
  let component: ProtuvrijednostiComponent;
  let fixture: ComponentFixture<ProtuvrijednostiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtuvrijednostiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtuvrijednostiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
