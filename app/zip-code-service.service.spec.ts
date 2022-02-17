import { TestBed } from '@angular/core/testing';

import { ZipCodeServiceService } from './zip-code-service.service';

describe('ZipCodeServiceService', () => {
  let service: ZipCodeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZipCodeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
