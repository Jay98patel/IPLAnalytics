import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InverntoryReportComponent } from './inverntory-report.component';

describe('InverntoryReportComponent', () => {
  let component: InverntoryReportComponent;
  let fixture: ComponentFixture<InverntoryReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InverntoryReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InverntoryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
