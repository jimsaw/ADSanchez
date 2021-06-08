import { TestBed } from '@angular/core/testing';

import { FormularioVerificacionService } from './formulario-verificacion.service';

describe('FormularioVerificacionService', () => {
  let service: FormularioVerificacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormularioVerificacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
