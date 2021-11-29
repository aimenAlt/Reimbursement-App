import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeeReqsComponent } from './view-employee-reqs.component';

describe('ViewEmployeeReqsComponent', () => {
  let component: ViewEmployeeReqsComponent;
  let fixture: ComponentFixture<ViewEmployeeReqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmployeeReqsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEmployeeReqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
