import { TestBed } from '@angular/core/testing';

import { ImportacionesService } from './importaciones.service';

describe('ImportacionesService', () => {
  let service: ImportacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImportacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
