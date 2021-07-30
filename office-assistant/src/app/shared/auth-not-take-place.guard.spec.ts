import { TestBed } from '@angular/core/testing';

import { AuthNotTakePlaceGuard } from './auth-not-take-place.guard';

describe('AuthNotTakePlaceGuard', () => {
  let guard: AuthNotTakePlaceGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthNotTakePlaceGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
