import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioVerificacion } from 'src/app/interfaces/formularioVerificacion';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-diversificacion-ingresos',
  templateUrl: './diversificacion-ingresos.component.html',
  styleUrls: ['./diversificacion-ingresos.component.css']
})
export class DiversificacionIngresosComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  diversificacionIngresos: FormGroup;

  yesNoAnswer: string[];
  usoCultivoDiferenteCacao: string[];
  otraActividadDentroFincaConIngreso: string[];
  actividadFueraFincaConIngreso: string[];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.diversificacionIngresos = this.formBuilder.group({
      usoCultivoDiferenteCacao: new FormControl(''),
      otraActividadDentroFincaConIngreso: new FormControl(''),
      realizaActividadFueraFincaConIngreso: new FormControl(''),
      huertosOrganicosEnFinca: new FormControl(''),
      otraActividadFueraFincaConIngreso: new FormControl(''),
      actividadFueraFincaConIngreso: new FormControl('')
    });
   }

  ngOnInit(): void {
    this.yesNoAnswer = environment.constantes.formularioVerificacion.yesNoAnswer;
    this.usoCultivoDiferenteCacao = environment.constantes.formularioVerificacion.diversificacionUsoCultivoDiferenteCacao;
    this.otraActividadDentroFincaConIngreso = environment.constantes.formularioVerificacion.diversificacionOtraActividadDentroFincaConIngreso;
    this.actividadFueraFincaConIngreso = environment.constantes.formularioVerificacion.diversificacionActividadFueraFincaConIngreso;
  }

  onSubmit() {

  }

  get seccion(): any {
    return {
      preguntas: {
        usoCultivoDiferenteCacao: {
          respuesta: this.diversificacionIngresos.value.usoCultivoDiferenteCacao
        },
        otraActividadDentroFincaConIngreso: {
          respuesta: this.diversificacionIngresos.value.otraActividadDentroFincaConIngreso
        },
        huertosOrganicosEnFinca: {
          respuesta: this.diversificacionIngresos.value.huertosOrganicosEnFinca
        },
        otraActividadFueraFincaConIngreso: {
          respuesta: this.diversificacionIngresos.value.otraActividadFueraFincaConIngreso,
          preguntas: {
            actividadFueraFincaConIngreso: {
              respuesta: this.diversificacionIngresos.value.actividadFueraFincaConIngreso
            },
            realizaActividadFueraFincaConIngreso: {
              respuesta: this.diversificacionIngresos.value.realizaActividadFueraFincaConIngreso
            }
          }
        }
      }
    };
  }

  setValues(formularioVerificacion: FormularioVerificacion): void {
    this.diversificacionIngresos.get('usoCultivoDiferenteCacao')
      .setValue(formularioVerificacion.secciones.diversificacionIngresos.preguntas.usoCultivoDiferenteCacao.respuesta);
    this.diversificacionIngresos.get('otraActividadDentroFincaConIngreso')
      .setValue(formularioVerificacion.secciones.diversificacionIngresos.preguntas.otraActividadDentroFincaConIngreso.respuesta);
    this.diversificacionIngresos.get('huertosOrganicosEnFinca')
      .setValue(formularioVerificacion.secciones.diversificacionIngresos.preguntas.huertosOrganicosEnFinca.respuesta);
    this.diversificacionIngresos.get('otraActividadFueraFincaConIngreso')
      .setValue(formularioVerificacion.secciones.diversificacionIngresos.preguntas.otraActividadFueraFincaConIngreso.respuesta);
    this.diversificacionIngresos.get('actividadFueraFincaConIngreso')
      .setValue(formularioVerificacion.secciones.diversificacionIngresos.preguntas.otraActividadFueraFincaConIngreso.preguntas.actividadFueraFincaConIngreso.respuesta);
    this.diversificacionIngresos.get('realizaActividadFueraFincaConIngreso')
      .setValue(formularioVerificacion.secciones.diversificacionIngresos.preguntas.otraActividadFueraFincaConIngreso.preguntas.realizaActividadFueraFincaConIngreso.respuesta);
  }

}
