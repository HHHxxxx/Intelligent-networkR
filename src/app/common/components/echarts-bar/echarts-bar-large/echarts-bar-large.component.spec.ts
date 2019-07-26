import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnchantsBarLargeComponent } from './echarts-bar-large.component';

describe('EnchantsBarLargeComponent', () => {
  let component: EnchantsBarLargeComponent;
  let fixture: ComponentFixture<EnchantsBarLargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnchantsBarLargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnchantsBarLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
