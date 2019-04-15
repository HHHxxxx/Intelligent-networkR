import { TestBed } from '@angular/core/testing';

import { TroubleService } from './trouble.service';

describe('TroubleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TroubleService = TestBed.get(TroubleService);
    expect(service).toBeTruthy();
  });
});
