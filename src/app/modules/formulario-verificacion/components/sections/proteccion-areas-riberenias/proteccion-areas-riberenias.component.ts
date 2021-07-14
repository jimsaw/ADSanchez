import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioVerificacion } from 'src/app/interfaces/formularioVerificacion';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-proteccion-areas-riberenias',
  templateUrl: './proteccion-areas-riberenias.component.html',
  styleUrls: ['./proteccion-areas-riberenias.component.css']
})
export class ProteccionAreasRibereniasComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  proteccionAreasRiberenias: FormGroup;

  yesNoAnswer: string[];
  nombreFuenteHidrica: string[];
  tipoFuenteHidrica: string[];
  consideradaFuenteHidrica: string[];
  comoBrindaProtFuentHidr: string[];
  distanciaRequerida: string[];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.proteccionAreasRiberenias = this.formBuilder.group({
      poseeFuenteHidrica: new FormControl(''),
      nombreFuenteHidrica: new FormControl(''),
      tipoFuenteHidrica: new FormControl(''),
      especifiqueOtros: new FormControl(''),
      consideradaFuenteHidrica: new FormControl(''),
      poseeNacientes: new FormControl(''),
      cuantasNacientes: new FormControl(''),
      brindaProteccionFuenteHidrica: new FormControl(''),
      comoBrindaProtFuentHidr: new FormControl(''),
      distanciaRequerida: new FormControl('')
    });
   }

  ngOnInit(): void {
    this.yesNoAnswer = environment.constantes.formularioVerificacion.yesNoAnswer;
    this.nombreFuenteHidrica = environment.constantes.formularioVerificacion.proteccionAreasRibereniasNombreFuenteHidrica;
    this.tipoFuenteHidrica = environment.constantes.formularioVerificacion.proteccionAreasRibereniasTipoFuenteHidrica;
    this.consideradaFuenteHidrica = environment.constantes.formularioVerificacion.proteccionAreasRibereniasConsideradaFuenteHidrica;
    this.comoBrindaProtFuentHidr = environment.constantes.formularioVerificacion.proteccionAreasRibereniasComoBrindaProtFuentHidr;
    this.distanciaRequerida = environment.constantes.formularioVerificacion.proteccionAreasRibereniasDistanciaRequerida;
  }

  onSubmit() {

  }

  poseeFuenteHidrica(): boolean {
    return this.proteccionAreasRiberenias.get('poseeFuenteHidrica').value === 'SI';
  }

  otroNombreFuenteHidrica(): boolean {
    return this.proteccionAreasRiberenias.get('nombreFuenteHidrica').value === 'OTRO';
  }

  poseeNacientes(): boolean {
    return this.proteccionAreasRiberenias.get('poseeNacientes').value === 'SI';
  }

  brindaProteccionFuenteHidrica(): boolean {
    return this.proteccionAreasRiberenias.get('brindaProteccionFuenteHidrica').value === 'SI';
  }

  get seccion(): any {
    return {
      preguntas: {
        poseeFuenteHidrica: {
          respuesta: this.proteccionAreasRiberenias.value.poseeFuenteHidrica,
          preguntas: {
            nombreFuenteHidrica: {
              respuesta: this.proteccionAreasRiberenias.value.nombreFuenteHidrica,
              preguntas: {
                especifiqueOtros: {
                  respuesta: this.proteccionAreasRiberenias.value.especifiqueOtros
                }
              }
            },
            consideradaFuenteHidrica: {
              respuesta: this.proteccionAreasRiberenias.value.consideradaFuenteHidrica
            },
            tipoFuenteHidrica: {
              respuesta: this.proteccionAreasRiberenias.value.tipoFuenteHidrica
            },
            poseeNacientes: {
              respuesta: this.proteccionAreasRiberenias.value.poseeNacientes,
              preguntas: {
                cuantasNacientes: {
                  respuesta: this.proteccionAreasRiberenias.value.cuantasNacientes
                }
              }
            },
            brindaProteccionFuenteHidrica: {
              respuesta: this.proteccionAreasRiberenias.value.brindaProteccionFuenteHidrica,
              preguntas: {
                comoBrindaProtFuentHidr: {
                  respuesta: this.proteccionAreasRiberenias.value.comoBrindaProtFuentHidr
                }
              }
            },
            distanciaRequerida: {
              respuesta: this.proteccionAreasRiberenias.value.distanciaRequerida
            }
          }
        }
      }
    };
  }

  setValues(formularioVerificacion: FormularioVerificacion): void {
    this.proteccionAreasRiberenias.get('poseeFuenteHidrica')
      .setValue(formularioVerificacion.secciones.proteccionAreasRiberenias.preguntas.poseeFuenteHidrica.respuesta);
    this.proteccionAreasRiberenias.get('nombreFuenteHidrica')
      .setValue(formularioVerificacion.secciones.proteccionAreasRiberenias.preguntas.poseeFuenteHidrica.preguntas.nombreFuenteHidrica.respuesta);
    this.proteccionAreasRiberenias.get('especifiqueOtros')
      .setValue(formularioVerificacion.secciones.proteccionAreasRiberenias.preguntas.poseeFuenteHidrica.preguntas.nombreFuenteHidrica.preguntas.especifiqueOtros.respuesta);
    this.proteccionAreasRiberenias.get('consideradaFuenteHidrica')
      .setValue(formularioVerificacion.secciones.proteccionAreasRiberenias.preguntas.poseeFuenteHidrica.preguntas.consideradaFuenteHidrica.respuesta);
    this.proteccionAreasRiberenias.get('tipoFuenteHidrica')
      .setValue(formularioVerificacion.secciones.proteccionAreasRiberenias.preguntas.poseeFuenteHidrica.preguntas.tipoFuenteHidrica.respuesta);
    this.proteccionAreasRiberenias.get('poseeNacientes')
      .setValue(formularioVerificacion.secciones.proteccionAreasRiberenias.preguntas.poseeFuenteHidrica.preguntas.poseeNacientes.respuesta);
    this.proteccionAreasRiberenias.get('cuantasNacientes')
      .setValue(formularioVerificacion.secciones.proteccionAreasRiberenias.preguntas.poseeFuenteHidrica.preguntas.poseeNacientes.preguntas.cuantasNacientes.respuesta);
    this.proteccionAreasRiberenias.get('brindaProteccionFuenteHidrica')
      .setValue(formularioVerificacion.secciones.proteccionAreasRiberenias.preguntas.poseeFuenteHidrica.preguntas.brindaProteccionFuenteHidrica.respuesta);
    this.proteccionAreasRiberenias.get('comoBrindaProtFuentHidr')
      .setValue(formularioVerificacion.secciones.proteccionAreasRiberenias.preguntas.poseeFuenteHidrica.preguntas.brindaProteccionFuenteHidrica.preguntas.comoBrindaProtFuentHidr.respuesta);
    this.proteccionAreasRiberenias.get('distanciaRequerida')
      .setValue(formularioVerificacion.secciones.proteccionAreasRiberenias.preguntas.poseeFuenteHidrica.preguntas.distanciaRequerida.respuesta);
  }

}
