import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsBarEquipmentComponent } from './echarts-bar-equipment.component';

describe('EchartsBarEquipmentComponent', () => {
  let component: EchartsBarEquipmentComponent;
  let fixture: ComponentFixture<EchartsBarEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartsBarEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartsBarEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
