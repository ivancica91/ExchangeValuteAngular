import { TestBed } from '@angular/core/testing';

import { ZahtjeviService } from './zahtjevi.service';

describe('ZahtjeviService', () => {
  let service: ZahtjeviService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZahtjeviService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
