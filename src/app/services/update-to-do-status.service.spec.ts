import { TestBed } from '@angular/core/testing';

import { UpdateToDoStatusService } from './update-to-do-status.service';

describe('UpdateToDoStatusService', () => {
  let service: UpdateToDoStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateToDoStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
