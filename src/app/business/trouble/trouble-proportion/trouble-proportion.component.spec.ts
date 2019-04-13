import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TroubleProportionComponent } from './trouble-proportion.component';

describe('TroubleProportionComponent', () => {
  let component: TroubleProportionComponent;
  let fixture: ComponentFixture<TroubleProportionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TroubleProportionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TroubleProportionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
