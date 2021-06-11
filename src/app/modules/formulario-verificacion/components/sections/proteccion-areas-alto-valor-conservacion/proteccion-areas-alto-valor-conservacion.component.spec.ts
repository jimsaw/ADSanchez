import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProteccionAreasAltoValorConservacionComponent } from './proteccion-areas-alto-valor-conservacion.component';

describe('ProteccionAreasAltoValorConservacionComponent', () => {
  let component: ProteccionAreasAltoValorConservacionComponent;
  let fixture: ComponentFixture<ProteccionAreasAltoValorConservacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProteccionAreasAltoValorConservacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProteccionAreasAltoValorConservacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
