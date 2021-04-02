import { TestBed } from '@angular/core/testing';

import { GetAllToDoService } from './get-all-to-do.service';

describe('GetAllToDoService', () => {
  let service: GetAllToDoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllToDoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
