import { TestBed } from '@angular/core/testing';

import { FormularioLineaBaseService } from './formulario-linea-base.service';

describe('FormularioLineaBaseService', () => {
  let service: FormularioLineaBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormularioLineaBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
