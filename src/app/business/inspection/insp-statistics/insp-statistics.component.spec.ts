import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspStatisticsComponent } from './insp-statistics.component';

describe('InspStatisticsComponent', () => {
  let component: InspStatisticsComponent;
  let fixture: ComponentFixture<InspStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
