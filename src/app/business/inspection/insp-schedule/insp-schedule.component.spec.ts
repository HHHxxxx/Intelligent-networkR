import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspScheduleComponent } from './insp-schedule.component';

describe('InspScheduleComponent', () => {
  let component: InspScheduleComponent;
  let fixture: ComponentFixture<InspScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
