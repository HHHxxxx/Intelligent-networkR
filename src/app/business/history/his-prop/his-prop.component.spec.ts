import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HisPropComponent } from './his-prop.component';

describe('HisPropComponent', () => {
  let component: HisPropComponent;
  let fixture: ComponentFixture<HisPropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HisPropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HisPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
