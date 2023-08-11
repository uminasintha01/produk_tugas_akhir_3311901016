import { TestBed } from '@angular/core/testing';

import { AppVersionApiService } from './app-version-api.service';

describe('AppVersionApiService', () => {
  let service: AppVersionApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppVersionApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
