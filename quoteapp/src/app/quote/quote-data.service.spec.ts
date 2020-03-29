import { TestBed } from '@angular/core/testing';

import { QuoteDataService } from './quote-data.service';

describe('QuoteDataService', () => {
  let service: QuoteDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuoteDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
