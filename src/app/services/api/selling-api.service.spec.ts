import { TestBed } from '@angular/core/testing';

import { SellingApiService } from './selling-api.service';

describe('SellingApiService', () => {
  let service: SellingApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellingApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
