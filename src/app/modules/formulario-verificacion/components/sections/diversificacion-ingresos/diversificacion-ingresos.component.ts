import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-diversificacion-ingresos',
  templateUrl: './diversificacion-ingresos.component.html',
  styleUrls: ['./diversificacion-ingresos.component.css']
})
export class DiversificacionIngresosComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;
  yesNoAnswer;
  usoCultivoDiferenteCacao;
  otraActividadDentroFincaConIngreso;
  actividadFueraFincaConIngreso;

  constructor() { }

  ngOnInit(): void {
    this.yesNoAnswer = environment.constantes.formularioVerificacion.yesNoAnswer;
    this.usoCultivoDiferenteCacao = environment.constantes.formularioVerificacion.diversificacionUsoCultivoDiferenteCacao;
    this.otraActividadDentroFincaConIngreso = environment.constantes.formularioVerificacion.diversificacionOtraActividadDentroFincaConIngreso;
    this.actividadFueraFincaConIngreso = environment.constantes.formularioVerificacion.diversificacionActividadFueraFincaConIngreso;
  }

  onSubmit() {

  }
}
