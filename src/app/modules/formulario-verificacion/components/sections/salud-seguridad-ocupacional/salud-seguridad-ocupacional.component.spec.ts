import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludSeguridadOcupacionalComponent } from './salud-seguridad-ocupacional.component';

describe('SaludSeguridadOcupacionalComponent', () => {
  let component: SaludSeguridadOcupacionalComponent;
  let fixture: ComponentFixture<SaludSeguridadOcupacionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaludSeguridadOcupacionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaludSeguridadOcupacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
