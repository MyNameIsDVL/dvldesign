import { TestBed } from '@angular/core/testing';

import { TimeWorkService } from './time-work.service';

describe('TimeWorkService', () => {
  let service: TimeWorkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeWorkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
