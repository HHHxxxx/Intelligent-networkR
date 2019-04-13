import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProportionComponent } from './main-proportion.component';

describe('MainProportionComponent', () => {
  let component: MainProportionComponent;
  let fixture: ComponentFixture<MainProportionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainProportionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainProportionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
