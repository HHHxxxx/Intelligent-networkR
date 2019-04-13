import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspComponent } from './insp.component';

describe('InspComponent', () => {
  let component: InspComponent;
  let fixture: ComponentFixture<InspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
