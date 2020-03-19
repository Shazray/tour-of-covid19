import { TestBed } from '@angular/core/testing';

import { NazionaleService } from './nazionale.service';

describe('NazionaleService', () => {
  let service: NazionaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NazionaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
