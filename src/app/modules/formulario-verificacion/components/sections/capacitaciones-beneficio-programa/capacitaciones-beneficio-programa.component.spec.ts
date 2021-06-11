import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacitacionesBeneficioProgramaComponent } from './capacitaciones-beneficio-programa.component';

describe('CapacitacionesBeneficioProgramaComponent', () => {
  let component: CapacitacionesBeneficioProgramaComponent;
  let fixture: ComponentFixture<CapacitacionesBeneficioProgramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapacitacionesBeneficioProgramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacitacionesBeneficioProgramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
