import { TestBed } from '@angular/core/testing';

import { InsertToDoItemService } from './insert-to-do-item.service';

describe('InsertToDoItemService', () => {
  let service: InsertToDoItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsertToDoItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
