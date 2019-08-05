import { TestBed } from '@angular/core/testing';

import { FundDetailService } from './fund-detail.service';

describe('FundDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FundDetailService = TestBed.get(FundDetailService);
    expect(service).toBeTruthy();
  });
});
