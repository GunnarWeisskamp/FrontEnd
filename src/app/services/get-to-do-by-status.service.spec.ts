import { TestBed } from '@angular/core/testing';

import { GetToDoByStatusService } from './get-to-do-by-status.service';

describe('GetToDoByStatusService', () => {
  let service: GetToDoByStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetToDoByStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
