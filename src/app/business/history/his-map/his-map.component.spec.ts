import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HisMapComponent } from './his-map.component';

describe('HisMapComponent', () => {
  let component: HisMapComponent;
  let fixture: ComponentFixture<HisMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HisMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HisMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
