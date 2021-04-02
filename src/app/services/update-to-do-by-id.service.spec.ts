import { TestBed } from '@angular/core/testing';

import { UpdateToDoByIDService } from './update-to-do-by-id.service';

describe('UpdateToDoByIDService', () => {
  let service: UpdateToDoByIDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateToDoByIDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
