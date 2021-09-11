import { TestBed } from '@angular/core/testing';

import { FormattingService } from './formatting.service';

describe('FormatingService', () => {
  let service: FormattingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormattingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
