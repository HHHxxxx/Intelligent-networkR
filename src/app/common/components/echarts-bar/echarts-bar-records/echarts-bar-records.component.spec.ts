import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsBarRecordsComponent } from './echarts-bar-records.component';

describe('EchartsBarRecordsComponent', () => {
  let component: EchartsBarRecordsComponent;
  let fixture: ComponentFixture<EchartsBarRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartsBarRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartsBarRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
