import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TroubleStatisticsComponent } from './trouble-statistics.component';

describe('TroubleStatisticsComponent', () => {
  let component: TroubleStatisticsComponent;
  let fixture: ComponentFixture<TroubleStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TroubleStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TroubleStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
