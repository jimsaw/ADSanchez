import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioVerificacion } from 'src/app/interfaces/formularioVerificacion';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-datos-finca',
  templateUrl: './datos-finca.component.html',
  styleUrls: ['./datos-finca.component.css']
})
export class DatosFincaComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  public datosFinca: FormGroup;

  yesNoAnswer: string[];
  datosFincaMesIncremento: string[];
  datosFincaMotivoAreaNueva: string[];
  datosFincaUsoAreaNueva: string[];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.datosFinca = this.formBuilder.group({
      incrementoHectareajeFinca: new FormControl(''),
      cantidadAumento: new FormControl(''),
      mesIncrementoHectareaje: new FormControl(''),
      motivoAreaNueva: new FormControl(''),
      usoAreaNueva: new FormControl(''),
      incrementoFueraTamanioFinca: new FormControl('')
    });
   }

  ngOnInit(): void {
    this.yesNoAnswer = environment.constantes.formularioVerificacion.yesNoAnswer;
    this.datosFincaMesIncremento = environment.constantes.formularioVerificacion.Meses;
    this.datosFincaMotivoAreaNueva = environment.constantes.formularioVerificacion.datosFincaMotivoAreaNueva;
    this.datosFincaUsoAreaNueva = environment.constantes.formularioVerificacion.datosFincaUsoAreaNueva;
  }

  onSubmit() {

  }

  haIncrementadoHectareaje(): boolean {
    return this.datosFinca.get('incrementoHectareajeFinca').value === 'SI'
  }

  get seccion(): any {
    return {
      preguntas: {
        incrementoHectareajeFinca: {
          respuesta: this.datosFinca.value.incrementoHectareajeFinca,
          preguntas: {
            cantidadAumento: {
              respuesta: this.datosFinca.value.cantidadAumento
            },
            mesIncrementoHectareaje: {
              respuesta: this.datosFinca.value.mesIncrementoHectareaje
            },
            motivoAreaNueva: {
              respuesta: this.datosFinca.value.motivoAreaNueva
            },
            usoAreaNueva: {
              respuesta: this.datosFinca.value.usoAreaNueva
            },
            incrementoFueraTamanioFinca: {
              respuesta: this.datosFinca.value.incrementoFueraTamanioFinca
            }
          }
        }
      }
    };
  }

  setValues(formularioVerificacion: FormularioVerificacion): void {
    this.datosFinca.get('incrementoHectareajeFinca')
      .setValue(formularioVerificacion.secciones.datosFinca.preguntas.incrementoHectareajeFinca.respuesta);
    this.datosFinca.get('cantidadAumento')
      .setValue(formularioVerificacion.secciones.datosFinca.preguntas.incrementoHectareajeFinca.preguntas.cantidadAumento.respuesta);
    this.datosFinca.get('mesIncrementoHectareaje')
      .setValue(formularioVerificacion.secciones.datosFinca.preguntas.incrementoHectareajeFinca.preguntas.mesIncrementoHectareaje.respuesta);
    this.datosFinca.get('motivoAreaNueva')
      .setValue(formularioVerificacion.secciones.datosFinca.preguntas.incrementoHectareajeFinca.preguntas.motivoAreaNueva.respuesta);
    this.datosFinca.get('usoAreaNueva')
      .setValue(formularioVerificacion.secciones.datosFinca.preguntas.incrementoHectareajeFinca.preguntas.usoAreaNueva.respuesta);
    this.datosFinca.get('incrementoFueraTamanioFinca')
      .setValue(formularioVerificacion.secciones.datosFinca.preguntas.incrementoHectareajeFinca.preguntas.incrementoFueraTamanioFinca.respuesta);
  }

}
