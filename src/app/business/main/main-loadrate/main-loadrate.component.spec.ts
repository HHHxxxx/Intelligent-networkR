import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLoadrateComponent } from './main-loadrate.component';

describe('MainLoadrateComponent', () => {
  let component: MainLoadrateComponent;
  let fixture: ComponentFixture<MainLoadrateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainLoadrateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLoadrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
