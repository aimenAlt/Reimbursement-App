import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReqsComponent } from './view-reqs.component';

describe('ViewReqsComponent', () => {
  let component: ViewReqsComponent;
  let fixture: ComponentFixture<ViewReqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewReqsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
