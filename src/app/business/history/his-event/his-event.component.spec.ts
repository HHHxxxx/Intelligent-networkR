import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HisEventComponent } from './his-event.component';

describe('HisEventComponent', () => {
  let component: HisEventComponent;
  let fixture: ComponentFixture<HisEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HisEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HisEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
