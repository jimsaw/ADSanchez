import { TestBed } from '@angular/core/testing';

import { ImportacionLineaBaseService } from './importacion-linea-base.service';

describe('ImportacionLineaBaseService', () => {
  let service: ImportacionLineaBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImportacionLineaBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
