import { TestBed } from '@angular/core/testing';

import { KeymapperService } from './keymapper.service';

describe('KeymapperService', () => {
  let service: KeymapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeymapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
