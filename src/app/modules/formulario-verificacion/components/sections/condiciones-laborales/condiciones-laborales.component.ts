import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioVerificacion } from 'src/app/interfaces/formularioVerificacion';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-condiciones-laborales',
  templateUrl: './condiciones-laborales.component.html',
  styleUrls: ['./condiciones-laborales.component.css']
})
export class CondicionesLaboralesComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  condicionesLaborales: FormGroup;

  yesNoAnswer: string[];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.condicionesLaborales = this.formBuilder.group({
      discriminacion: new FormControl(''),
      explotacion: new FormControl(''),
      trabajoInfantil: new FormControl(''),
      documentosSoporte: new FormControl(''),
      montoAcuerdoContratoAgricola: new FormControl('')
    });
   }

  ngOnInit(): void {
    this.yesNoAnswer = environment.constantes.formularioVerificacion.yesNoAnswer;
  }

  onSubmit() {

  }

  get seccion(): any {
    return {
      preguntas: {
        discriminacion: {
          respuesta: this.condicionesLaborales.value.discriminacion
        },
        explotacion: {
          respuesta: this.condicionesLaborales.value.explotacion
        },
        trabajoInfantil: {
          respuesta: this.condicionesLaborales.value.trabajoInfantil
        },
        documentosSoporte: {
          respuesta: this.condicionesLaborales.value.documentosSoporte
        },
        montoAcuerdoContratoAgricola: {
          respuesta: this.condicionesLaborales.value.montoAcuerdoContratoAgricola
        }
      }
    };
  }

  setValues(formularioVerificacion: FormularioVerificacion): void {
    this.condicionesLaborales.get('discriminacion')
      .setValue(formularioVerificacion.secciones.condicionesLaborales.preguntas.discriminacion.respuesta);
    this.condicionesLaborales.get('explotacion')
      .setValue(formularioVerificacion.secciones.condicionesLaborales.preguntas.explotacion.respuesta);
    this.condicionesLaborales.get('trabajoInfantil')
      .setValue(formularioVerificacion.secciones.condicionesLaborales.preguntas.trabajoInfantil.respuesta);
    this.condicionesLaborales.get('documentosSoporte')
      .setValue(formularioVerificacion.secciones.condicionesLaborales.preguntas.documentosSoporte.respuesta);
    this.condicionesLaborales.get('montoAcuerdoContratoAgricola')
      .setValue(formularioVerificacion.secciones.condicionesLaborales.preguntas.montoAcuerdoContratoAgricola.respuesta);
  }

}
