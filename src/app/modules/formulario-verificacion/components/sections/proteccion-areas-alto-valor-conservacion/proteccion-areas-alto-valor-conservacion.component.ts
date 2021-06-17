import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-proteccion-areas-alto-valor-conservacion',
  templateUrl: './proteccion-areas-alto-valor-conservacion.component.html',
  styleUrls: ['./proteccion-areas-alto-valor-conservacion.component.css']
})
export class ProteccionAreasAltoValorConservacionComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;
  yesNoAnswer;
  tipoProblemaErosion;
  comoQuePracticas;
  gradoPresentanPendientes;
  tipoAreaForestal;
  cualesEspeciesPeligroExtincion;
  tipoAltoValor;

  constructor() { }

  ngOnInit(): void {
    this.yesNoAnswer = environment.constantes.formularioVerificacion.yesNoAnswer;
    this.tipoProblemaErosion = environment.constantes.formularioVerificacion.proteccionAreasAltoValorTipoProblemaErosion;
    this.comoQuePracticas = environment.constantes.formularioVerificacion.proteccionAreasAltoValorComoQuePracticas;
    this.gradoPresentanPendientes = environment.constantes.formularioVerificacion.proteccionAreasAltoValorGradoPresentanPendientes;
    this.tipoAreaForestal = environment.constantes.formularioVerificacion.proteccionAreasAltoValorTipoAreaForestal;
    this.cualesEspeciesPeligroExtincion = environment.constantes.formularioVerificacion.proteccionAreasAltoValorCualesEspeciesPeligroExtincion;
    this.tipoAltoValor = environment.constantes.formularioVerificacion.proteccionAreasAltoValorTipoAltoValor;
  }

  onSubmit() {

  }
}
