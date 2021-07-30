import { TestBed } from '@angular/core/testing';

import { ImportacionVerificacionService } from './importacion-verificacion.service';

describe('ImportacionVerificacionService', () => {
  let service: ImportacionVerificacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImportacionVerificacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
