import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IplStatisticsComponent } from './ipl-statistics.component';

describe('IplStatisticsComponent', () => {
  let component: IplStatisticsComponent;
  let fixture: ComponentFixture<IplStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IplStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IplStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
