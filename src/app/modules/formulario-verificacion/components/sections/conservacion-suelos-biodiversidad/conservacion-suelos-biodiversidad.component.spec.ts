import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConservacionSuelosBiodiversidadComponent } from './conservacion-suelos-biodiversidad.component';

describe('ConservacionSuelosBiodiversidadComponent', () => {
  let component: ConservacionSuelosBiodiversidadComponent;
  let fixture: ComponentFixture<ConservacionSuelosBiodiversidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConservacionSuelosBiodiversidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConservacionSuelosBiodiversidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
