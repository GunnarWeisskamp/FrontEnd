import { TestBed } from '@angular/core/testing';

import { DeleteToDoItemService } from './delete-to-do-item.service';

describe('DeleteToDoItemService', () => {
  let service: DeleteToDoItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteToDoItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
