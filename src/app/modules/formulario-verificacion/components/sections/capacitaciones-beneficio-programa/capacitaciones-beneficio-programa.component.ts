import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioVerificacion } from 'src/app/interfaces/formularioVerificacion';
import { CapacitacionComponent } from '../capacitacion/capacitacion.component';
import { IncentivosComponent } from '../incentivos/incentivos.component';

@Component({
  selector: 'app-capacitaciones-beneficio-programa',
  templateUrl: './capacitaciones-beneficio-programa.component.html',
  styleUrls: ['./capacitaciones-beneficio-programa.component.css']
})
export class CapacitacionesBeneficioProgramaComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  capacitacionesBeneficioPrograma: FormGroup;

  @ViewChild(CapacitacionComponent) capacitacionComponent: CapacitacionComponent;
  @ViewChild(IncentivosComponent) incentivosComponent: IncentivosComponent;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  get seccion(): any {
    return {
      secciones: {
        capacitacion: this.capacitacionComponent.seccion,
        incentivos: this.incentivosComponent.seccion
      }
    };
  }

  setValues(formularioVerificacion: FormularioVerificacion): void {
    this.capacitacionComponent.setValues(formularioVerificacion);
    this.incentivosComponent.setValues(formularioVerificacion);
  }

}
