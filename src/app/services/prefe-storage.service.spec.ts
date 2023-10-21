import { TestBed } from '@angular/core/testing';

import { PrefeStorageService } from './prefe-storage.service';

describe('PrefeStorageService', () => {
  let service: PrefeStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrefeStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
