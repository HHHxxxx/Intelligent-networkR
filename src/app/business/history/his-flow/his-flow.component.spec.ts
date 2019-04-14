import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HisFlowComponent } from './his-flow.component';

describe('HisFlowComponent', () => {
  let component: HisFlowComponent;
  let fixture: ComponentFixture<HisFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HisFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HisFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
