import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsBarJobComponent } from './echarts-bar-job.component';

describe('EchartsBarJobComponent', () => {
  let component: EchartsBarJobComponent;
  let fixture: ComponentFixture<EchartsBarJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartsBarJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartsBarJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
