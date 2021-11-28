import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitReqComponent } from './submit-req.component';

describe('SubmitReqComponent', () => {
  let component: SubmitReqComponent;
  let fixture: ComponentFixture<SubmitReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitReqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
