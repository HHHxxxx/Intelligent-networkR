import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TroubleWorkerComponent } from './trouble-worker.component';

describe('TroubleWorkerComponent', () => {
  let component: TroubleWorkerComponent;
  let fixture: ComponentFixture<TroubleWorkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TroubleWorkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TroubleWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
