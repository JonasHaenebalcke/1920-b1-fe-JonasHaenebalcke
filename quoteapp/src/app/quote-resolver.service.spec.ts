import { TestBed } from '@angular/core/testing';

import { QuoteResolverService } from './quote-resolver.service';

describe('QuoteResolverService', () => {
  let service: QuoteResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuoteResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
