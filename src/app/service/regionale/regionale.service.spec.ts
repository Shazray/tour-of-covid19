import { TestBed } from '@angular/core/testing';

import { RegionaleService } from './regionale.service';

describe('RegionaleService', () => {
  let service: RegionaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegionaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
