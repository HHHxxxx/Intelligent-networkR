import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HisStatisticsComponent } from './his-statistics.component';

describe('HisStatisticsComponent', () => {
  let component: HisStatisticsComponent;
  let fixture: ComponentFixture<HisStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HisStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HisStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
