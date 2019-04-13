import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspMonitorComponent } from './insp-monitor.component';

describe('InspMonitorComponent', () => {
  let component: InspMonitorComponent;
  let fixture: ComponentFixture<InspMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
