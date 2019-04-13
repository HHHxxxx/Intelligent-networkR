import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspMapComponent } from './insp-map.component';

describe('InspMapComponent', () => {
  let component: InspMapComponent;
  let fixture: ComponentFixture<InspMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
