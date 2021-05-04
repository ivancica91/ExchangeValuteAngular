import { TestBed } from '@angular/core/testing';

import { SredstvaService } from './sredstva.service';

describe('SredstvaService', () => {
  let service: SredstvaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SredstvaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
