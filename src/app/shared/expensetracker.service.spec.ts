import { TestBed } from '@angular/core/testing';

import { ExpensetrackerService } from './expensetracker.service';

describe('ExpensetrackerService', () => {
  let service: ExpensetrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpensetrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
