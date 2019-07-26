import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsBarRepairComponent } from './echarts-bar-repair.component';

describe('EchartsBarRepairComponent', () => {
  let component: EchartsBarRepairComponent;
  let fixture: ComponentFixture<EchartsBarRepairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartsBarRepairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartsBarRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
