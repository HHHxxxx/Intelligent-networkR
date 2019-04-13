import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TroubleEventComponent } from './trouble-event.component';

describe('TroubleEventComponent', () => {
  let component: TroubleEventComponent;
  let fixture: ComponentFixture<TroubleEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TroubleEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TroubleEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
