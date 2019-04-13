import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TroubleMapComponent } from './trouble-map.component';

describe('TroubleMapComponent', () => {
  let component: TroubleMapComponent;
  let fixture: ComponentFixture<TroubleMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TroubleMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TroubleMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
