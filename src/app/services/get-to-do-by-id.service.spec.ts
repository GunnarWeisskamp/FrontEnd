import { TestBed } from '@angular/core/testing';

import { GetToDoByIDService } from './get-to-do-by-id.service';

describe('GetToDoByIDService', () => {
  let service: GetToDoByIDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetToDoByIDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
