import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsBarInspComponent } from './echarts-bar-insp.component';

describe('EchartsBarInspComponent', () => {
  let component: EchartsBarInspComponent;
  let fixture: ComponentFixture<EchartsBarInspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartsBarInspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartsBarInspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
