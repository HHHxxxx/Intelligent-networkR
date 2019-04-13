import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspRecordingComponent } from './insp-recording.component';

describe('InspRecordingComponent', () => {
  let component: InspRecordingComponent;
  let fixture: ComponentFixture<InspRecordingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspRecordingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspRecordingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
