import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeesComponent } from './view-employees.component';

describe('ViewUsersComponent', () => {
  let component: ViewEmployeesComponent;
  let fixture: ComponentFixture<ViewEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
