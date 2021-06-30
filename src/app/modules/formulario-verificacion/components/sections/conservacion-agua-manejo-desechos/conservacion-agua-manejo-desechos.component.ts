import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioVerificacion } from 'src/app/interfaces/formularioVerificacion';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-conservacion-agua-manejo-desechos',
  templateUrl: './conservacion-agua-manejo-desechos.component.html',
  styleUrls: ['./conservacion-agua-manejo-desechos.component.css']
})
export class ConservacionAguaManejoDesechosComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  conservacionAguaManejoDesechos: FormGroup;

  yesNoAnswer: string[];
  tipoExtraccion: string[];
  infraestructuraRiego: string[];
  impactoRiego: string[];
  disenioRiego: string[];
  filtroEcologicoParaQueUso: string[];
  criterioClasificarBasuraDomestica: string[];
  tratamientoBasura: string[];
  lugarAlmacenamiento: string[];
  frecuencia: string[];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.conservacionAguaManejoDesechos = this.formBuilder.group({
      fincaConRiego: new FormControl(''),
      disenioRiego: new FormControl(''),
      hectareasDisenioRiego: new FormControl(''),
      permisoExtraerAguaRiego: new FormControl(''),
      analisisAguaRiego: new FormControl(''),
      presentaAnexos: new FormControl(''),
      utilizaFiltroEcologico: new FormControl(''),
      razonUsoFiltroEcologico: new FormControl(''),
      areaDeschPlasticos: new FormControl(''),
      fincaLibrePlasticos: new FormControl(''),
      clasificaBasuraDomestica: new FormControl(''),
      criterioClasificaBasuraDomestica: new FormControl(''),
      practicaReciclajeCompostaje: new FormControl(''),
      tratamientoBasura: new FormControl(''),
      conocimientoAreaRecepcioEnvasesProductosQuimicos: new FormControl(''),
      usoServicioAreaRecepcioEnvasesProductosQuimicos: new FormControl(''),
      frecuenciaUsoServicioAreaRecepcioEnvasesProductosQuimicos: new FormControl(''),
      almacenaSeguridadEnvasesPrevioTraslado: new FormControl(''),
      lugarAlmacena: new FormControl(''),
      tratamientoAguasNegras: new FormControl(''),
      tipoExtraccion: new FormControl(''),
      infraestructuraRiego: new FormControl(''),
      impactoRiego: new FormControl(''),
    });
   }

  ngOnInit(): void {
    this.yesNoAnswer = environment.constantes.formularioVerificacion.yesNoAnswer;
    this.tipoExtraccion = environment.constantes.formularioVerificacion.conservacionAguaManejoDesechosTipoExtraccion;
    this.infraestructuraRiego = environment.constantes.formularioVerificacion.conservacionAguaManejoDesechosInfraestructuraRiego;
    this.impactoRiego = environment.constantes.formularioVerificacion.conservacionAguaManejoDesechosImpactoRiego;
    this.disenioRiego = environment.constantes.formularioVerificacion.conservacionAguaManejoDesechosDisenioRiego;
    this.filtroEcologicoParaQueUso = environment.constantes.formularioVerificacion.conservacionAguaManejoDesechosFiltroEcologicoParaQueUso;
    this.criterioClasificarBasuraDomestica = environment.constantes.formularioVerificacion.conservacionAguaManejoDesechosCriterioClasificarBasuraDomestica;
    this.tratamientoBasura = environment.constantes.formularioVerificacion.conservacionAguaManejoDesechosTratamientoBasura;
    this.lugarAlmacenamiento = environment.constantes.formularioVerificacion.conservacionAguaManejoDesechosLugarAlmacenamiento;
    this.frecuencia = environment.constantes.formularioVerificacion.ventaFrecuencia;
  }

  onSubmit() {

  }

  get seccion(): any {
    return {
      preguntas: {
        fincaConRiego: {
          respuesta: this.conservacionAguaManejoDesechos.value.fincaConRiego
        },
        disenioRiego: {
          respuesta: this.conservacionAguaManejoDesechos.value.disenioRiego,
          preguntas: {
            hectareasDisenioRiego: {
              respuesta: this.conservacionAguaManejoDesechos.value.hectareasDisenioRiego
            }
          }
        },
        permisoExtraerAguaRiego: {
          respuesta: this.conservacionAguaManejoDesechos.value.permisoExtraerAguaRiego
        },
        analisisAguaRiego: {
          respuesta: this.conservacionAguaManejoDesechos.value.analisisAguaRiego
        },
        presentaAnexos: {
          respuesta: this.conservacionAguaManejoDesechos.value.presentaAnexos
        },
        utilizaFiltroEcologico: {
          respuesta: this.conservacionAguaManejoDesechos.value.utilizaFiltroEcologico,
          preguntas: {
            razonUsoFiltroEcologico: {
              respuesta: this.conservacionAguaManejoDesechos.value.razonUsoFiltroEcologico
            }
          }
        },
        areaDeschPlasticos: {
          respuesta: this.conservacionAguaManejoDesechos.value.areaDeschPlasticos
        },
        fincaLibrePlasticos: {
          respuesta: this.conservacionAguaManejoDesechos.value.fincaLibrePlasticos
        },
        clasificaBasuraDomestica: {
          respuesta: this.conservacionAguaManejoDesechos.value.clasificaBasuraDomestica
        },
        criterioClasificaBasuraDomestica: {
          respuesta: this.conservacionAguaManejoDesechos.value.criterioClasificaBasuraDomestica
        },
        practicaReciclajeCompostaje: {
          respuesta: this.conservacionAguaManejoDesechos.value.practicaReciclajeCompostaje
        },
        tratamientoBasura: {
          respuesta: this.conservacionAguaManejoDesechos.value.tratamientoBasura
        },
        conocimientoAreaRecepcioEnvasesProductosQuimicos: {
          respuesta: this.conservacionAguaManejoDesechos.value.conocimientoAreaRecepcioEnvasesProductosQuimicos,
          preguntas: {
            usoServicioAreaRecepcioEnvasesProductosQuimicos: {
              respuesta: this.conservacionAguaManejoDesechos.value.usoServicioAreaRecepcioEnvasesProductosQuimicos
            },
            frecuenciaUsoServicioAreaRecepcioEnvasesProductosQuimicos: {
              respuesta: this.conservacionAguaManejoDesechos.value.frecuenciaUsoServicioAreaRecepcioEnvasesProductosQuimicos
            },
            almacenaSeguridadEnvasesPrevioTraslado: {
              respuesta: this.conservacionAguaManejoDesechos.value.almacenaSeguridadEnvasesPrevioTraslado,
              preguntas: {
                lugarAlmacena: {
                  respuesta: this.conservacionAguaManejoDesechos.value.lugarAlmacena
                }
              }
            }
          }
        },
        tratamientoAguasNegras: {
          respuesta: this.conservacionAguaManejoDesechos.value.tratamientoAguasNegras
        },
        tipoExtraccion: {
          respuesta: this.conservacionAguaManejoDesechos.value.tipoExtraccion
        },
        infraestructuraRiego: {
          respuesta: this.conservacionAguaManejoDesechos.value.infraestructuraRiego
        },
        impactoRiego: {
          respuesta: this.conservacionAguaManejoDesechos.value.impactoRiego
        }
      }
    };
  }

  setValues(formularioVerificacion: FormularioVerificacion): void {
    this.conservacionAguaManejoDesechos.get('fincaConRiego')
      .setValue(formularioVerificacion.secciones.conservacionAguaManejoDesechos.preguntas.fincaConRiego.respuesta);
    this.conservacionAguaManejoDesechos.get('disenioRiego')
      .setValue(formularioVerificacion.secciones.conservacionAguaManejoDesechos.preguntas.disenioRiego.respuesta);
    this.conservacionAguaManejoDesechos.get('hectareasDisenioRiego')
      .setValue(formularioVerificacion.secciones.conservacionAguaManejoDesechos.preguntas.disenioRiego.preguntas.hectareasDisenioRiego.respuesta);
    this.conservacionAguaManejoDesechos.get('permisoExtraerAguaRiego')
      .setValue(formularioVerificacion.secciones.conservacionAguaManejoDesechos.preguntas.permisoExtraerAguaRiego.respuesta);
    this.conservacionAguaManejoDesechos.get('analisisAguaRiego')
      .setValue(formularioVerificacion.secciones.conservacionAguaManejoDesechos.preguntas.analisisAguaRiego.respuesta);
    this.conservacionAguaManejoDesechos.get('presentaAnexos')
      .setValue(formularioVerificacion.secciones.conservacionAguaManejoDesechos.preguntas.presentaAnexos.respuesta);
    this.conservacionAguaManejoDesechos.get('utilizaFiltroEcologico')
      .setValue(formularioVerificacion.secciones.conservacionAguaManejoDesechos.preguntas.utilizaFiltroEcologico.respuesta);
    this.conservacionAguaManejoDesechos.get('razonUsoFiltroEcologico')
      .setValue(formularioVerificacion.secciones.conservacionAguaManejoDesechos.preguntas.utilizaFiltroEcologico.preguntas.razonUsoFiltroEcologico.respuesta);
    this.conservacionAguaManejoDesechos.get('areaDeschPlasticos')
      .setValue(formularioVerificacion.secciones.conservacionAguaManejoDesechos.preguntas.areaDeschPlasticos.respuesta);
    this.conservacionAguaManejoDesechos.get('fincaLibrePlasticos')
      .setValue(formularioVerificacion.secciones.conservacionAguaManejoDesechos.preguntas.fincaLibrePlasticos.respuesta);
    this.conservacionAguaManejoDesechos.get('clasificaBasuraDomestica')
      .setValue(formularioVerificacion.secciones.conservacionAguaManejoDesechos.preguntas.clasificaBasuraDomestica.respuesta);
    this.conservacionAguaManejoDesechos.get('criterioClasificaBasuraDomestica')
      .setValue(formularioVerificacion.secciones.conservacionAguaManejoDesechos.preguntas.criterioClasificaBasuraDomestica.respuesta);
    this.conservacionAguaManejoDesechos.get('practicaReciclajeCompostaje')
      .setValue(formularioVerificacion.secciones.conservacionAguaManejoDesechos.preguntas.practicaReciclajeCompostaje.respuesta);
    this.conservacionAguaManejoDesechos.get('tratamientoBasura')
      .setValue(formularioVerificacion.secciones.conservacionAguaManejoDesechos.preguntas.tratamientoBasura.respuesta);
    this.conservacionAguaManejoDesechos.get('conocimientoAreaRecepcioEnvasesProductosQuimicos')
      .setValue(formularioVerificacion.secciones.conservacionAguaManejoDesechos.preguntas.conocimientoAreaRecepcioEnvasesProductosQuimicos.respuesta);
    this.conservacionAguaManejoDesechos.get('usoServicioAreaRecepcioEnvasesProductosQuimicos')
      .setValue(formularioVerificacion.secciones.conservacionAguaManejoDesechos.preguntas.conocimientoAreaRecepcioEnvasesProductosQuimicos.preguntas.usoServicioAreaRecepcioEnvasesProductosQuimicos.respuesta);
    this.conservacionAguaManejoDesechos.get('frecuenciaUsoServicioAreaRecepcioEnvasesProductosQuimicos')
      .setValue(formularioVerificacion.secciones.conservacionAguaManejoDesechos.preguntas.conocimientoAreaRecepcioEnvasesProductosQuimicos.preguntas.frecuenciaUsoServicioAreaRecepcioEnvasesProductosQuimicos.respuesta);
    this.conservacionAguaManejoDesechos.get('almacenaSeguridadEnvasesPrevioTraslado')
      .setValue(formularioVerificacion.secciones.conservacionAguaManejoDesechos.preguntas.conocimientoAreaRecepcioEnvasesProductosQuimicos.preguntas.almacenaSeguridadEnvasesPrevioTraslado.respuesta);
    this.conservacionAguaManejoDesechos.get('lugarAlmacena')
      .setValue(formularioVerificacion.secciones.conservacionAguaManejoDesechos.preguntas.conocimientoAreaRecepcioEnvasesProductosQuimicos.preguntas.almacenaSeguridadEnvasesPrevioTraslado.preguntas.lugarAlmacena);
    this.conservacionAguaManejoDesechos.get('tratamientoAguasNegras')
      .setValue(formularioVerificacion.secciones.conservacionAguaManejoDesechos.preguntas.tratamientoAguasNegras.respuesta);
    this.conservacionAguaManejoDesechos.get('tipoExtraccion')
      .setValue(formularioVerificacion.secciones.conservacionAguaManejoDesechos.preguntas.tipoExtraccion.respuesta);
    this.conservacionAguaManejoDesechos.get('infraestructuraRiego')
      .setValue(formularioVerificacion.secciones.conservacionAguaManejoDesechos.preguntas.infraestructuraRiego.respuesta);
    this.conservacionAguaManejoDesechos.get('impactoRiego')
      .setValue(formularioVerificacion.secciones.conservacionAguaManejoDesechos.preguntas.impactoRiego.respuesta);  
  }

}
