import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioVerificacion } from 'src/app/interfaces/formularioVerificacion';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-proteccion-areas-alto-valor-conservacion',
  templateUrl: './proteccion-areas-alto-valor-conservacion.component.html',
  styleUrls: ['./proteccion-areas-alto-valor-conservacion.component.css']
})
export class ProteccionAreasAltoValorConservacionComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  proteccionAreasAltoValorConservacion: FormGroup;

  yesNoAnswer: string[];
  tipoProblemaErosion: string[];
  comoQuePracticas: string[];
  gradoPresentanPendientes: string[];
  tipoAreaForestal: string[];
  cualesEspeciesPeligroExtincion: string[];
  tipoAltoValor: string[];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.proteccionAreasAltoValorConservacion = this.formBuilder.group({
      sueloPresentaProblemaErosion: new FormControl(''),
      tipoProblemaErosion: new FormControl(''),
      necesitaImplementarPracticasMejoraSuelo: new FormControl(''),
      comoQuePracticas: new FormControl(''),
      gradoPresentanPendientes: new FormControl(''),
      cuentaConAreaForestales: new FormControl(''),
      tipoAreaForestal: new FormControl(''),
      realizaPlanesCorteExtraccionMadera: new FormControl(''),
      presentaAnexosAreasAltoValor: new FormControl(''),
      realizaPlanesReforestacion: new FormControl(''),
      conoceEspeciePeligroExtincionEnFinca: new FormControl(''),
      cualesEspeciesPeligroExtincion: new FormControl(''),
      especifiqueCualesEspeciesPeligroExtincion: new FormControl(''),
      fincaConsideradaAltoValor: new FormControl(''),
      tipoAltoValor: new FormControl('')
    });
   }

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

  sueloPresentaProblemaErosion(): boolean {
    return this.proteccionAreasAltoValorConservacion.get('sueloPresentaProblemaErosion').value === 'SI';
  }

  necesitaImplementarPracticasMejoraSuelo(): boolean {
    return this.proteccionAreasAltoValorConservacion.get('necesitaImplementarPracticasMejoraSuelo').value === 'SI';
  }

  cuentaConAreaForestales(): boolean {
    return this.proteccionAreasAltoValorConservacion.get('cuentaConAreaForestales').value === 'SI';
  }

  conoceEspeciePeligroExtincionEnFinca(): boolean {
    return this.proteccionAreasAltoValorConservacion.get('conoceEspeciePeligroExtincionEnFinca').value === 'SI';
  }

  fincaConsideradaAltoValor(): boolean {
    return this.proteccionAreasAltoValorConservacion.get('fincaConsideradaAltoValor').value === 'SI';
  }

  get seccion(): any {
    return {
      preguntas: {
        sueloPresentaProblemaErosion: {
          respuesta: this.proteccionAreasAltoValorConservacion.value.sueloPresentaProblemaErosion,
          preguntas: {
            tipoProblemaErosion: {
              respuesta: this.proteccionAreasAltoValorConservacion.value.tipoProblemaErosion
            }
          }
        },
        necesitaImplementarPracticasMejoraSuelo: {
          respuesta: this.proteccionAreasAltoValorConservacion.value.necesitaImplementarPracticasMejoraSuelo,
          preguntas: {
            comoQuePracticas: {
              respuesta: this.proteccionAreasAltoValorConservacion.value.comoQuePracticas
            }
          }
        },
        gradoPresentanPendientes: {
          respuesta: this.proteccionAreasAltoValorConservacion.value.gradoPresentanPendientes
        },
        cuentaConAreaForestales: {
          respuesta: this.proteccionAreasAltoValorConservacion.value.cuentaConAreaForestales,
          preguntas: {
            tipoAreaForestal: {
              respuesta: this.proteccionAreasAltoValorConservacion.value.tipoAreaForestal
            }
          }
        },
        realizaPlanesCorteExtraccionMadera: {
          respuesta: this.proteccionAreasAltoValorConservacion.value.realizaPlanesCorteExtraccionMadera
        },
        presentaAnexosAreasAltoValor: {
          respuesta: this.proteccionAreasAltoValorConservacion.value.presentaAnexosAreasAltoValor
        },
        realizaPlanesReforestacion: {
          respuesta: this.proteccionAreasAltoValorConservacion.value.realizaPlanesReforestacion
        },
        conoceEspeciePeligroExtincionEnFinca: {
          respuesta: this.proteccionAreasAltoValorConservacion.value.conoceEspeciePeligroExtincionEnFinca,
          preguntas: {
            cualesEspeciesPeligroExtincion: {
              respuesta: this.proteccionAreasAltoValorConservacion.value.cualesEspeciesPeligroExtincion
            },
            especifiqueCualesEspeciesPeligroExtincion: {
              respuesta: this.proteccionAreasAltoValorConservacion.value.especifiqueCualesEspeciesPeligroExtincion
            }
          }
        },
        fincaConsideradaAltoValor: {
          respuesta: this.proteccionAreasAltoValorConservacion.value.fincaConsideradaAltoValor,
          preguntas: {
            tipoAltoValor: {
              respuesta: this.proteccionAreasAltoValorConservacion.value.tipoAltoValor
            }
          }
        }
      }
    };
  }

  setValues(formularioVerificacion: FormularioVerificacion): void {
    this.proteccionAreasAltoValorConservacion.get('sueloPresentaProblemaErosion')
      .setValue(formularioVerificacion.secciones.proteccionAreasAltoValorConservacion.preguntas.sueloPresentaProblemaErosion.respuesta);
    this.proteccionAreasAltoValorConservacion.get('tipoProblemaErosion')
      .setValue(formularioVerificacion.secciones.proteccionAreasAltoValorConservacion.preguntas.sueloPresentaProblemaErosion.preguntas.tipoProblemaErosion.respuesta);
    this.proteccionAreasAltoValorConservacion.get('necesitaImplementarPracticasMejoraSuelo')
      .setValue(formularioVerificacion.secciones.proteccionAreasAltoValorConservacion.preguntas.necesitaImplementarPracticasMejoraSuelo.respuesta);
    this.proteccionAreasAltoValorConservacion.get('comoQuePracticas')
      .setValue(formularioVerificacion.secciones.proteccionAreasAltoValorConservacion.preguntas.necesitaImplementarPracticasMejoraSuelo.preguntas.comoQuePracticas.respuesta);
    this.proteccionAreasAltoValorConservacion.get('gradoPresentanPendientes')
      .setValue(formularioVerificacion.secciones.proteccionAreasAltoValorConservacion.preguntas.gradoPresentanPendientes.respuesta);
    this.proteccionAreasAltoValorConservacion.get('cuentaConAreaForestales')
      .setValue(formularioVerificacion.secciones.proteccionAreasAltoValorConservacion.preguntas.cuentaConAreaForestales.respuesta);
    this.proteccionAreasAltoValorConservacion.get('tipoAreaForestal')
      .setValue(formularioVerificacion.secciones.proteccionAreasAltoValorConservacion.preguntas.cuentaConAreaForestales.preguntas.tipoAreaForestal.respuesta);
    this.proteccionAreasAltoValorConservacion.get('realizaPlanesCorteExtraccionMadera')
      .setValue(formularioVerificacion.secciones.proteccionAreasAltoValorConservacion.preguntas.realizaPlanesCorteExtraccionMadera.respuesta);
    this.proteccionAreasAltoValorConservacion.get('presentaAnexosAreasAltoValor')
      .setValue(formularioVerificacion.secciones.proteccionAreasAltoValorConservacion.preguntas.presentaAnexosAreasAltoValor.respuesta);
    this.proteccionAreasAltoValorConservacion.get('realizaPlanesReforestacion')
      .setValue(formularioVerificacion.secciones.proteccionAreasAltoValorConservacion.preguntas.realizaPlanesReforestacion.respuesta);
    this.proteccionAreasAltoValorConservacion.get('conoceEspeciePeligroExtincionEnFinca')
      .setValue(formularioVerificacion.secciones.proteccionAreasAltoValorConservacion.preguntas.conoceEspeciePeligroExtincionEnFinca.respuesta);
    this.proteccionAreasAltoValorConservacion.get('cualesEspeciesPeligroExtincion')
      .setValue(formularioVerificacion.secciones.proteccionAreasAltoValorConservacion.preguntas.conoceEspeciePeligroExtincionEnFinca.preguntas.cualesEspeciesPeligroExtincion.respuesta);
    this.proteccionAreasAltoValorConservacion.get('especifiqueCualesEspeciesPeligroExtincion')
      .setValue(formularioVerificacion.secciones.proteccionAreasAltoValorConservacion.preguntas.conoceEspeciePeligroExtincionEnFinca.preguntas.especifiqueCualesEspeciesPeligroExtincion.respuesta);
    this.proteccionAreasAltoValorConservacion.get('fincaConsideradaAltoValor')
      .setValue(formularioVerificacion.secciones.proteccionAreasAltoValorConservacion.preguntas.fincaConsideradaAltoValor.respuesta);
    this.proteccionAreasAltoValorConservacion.get('tipoAltoValor')
      .setValue(formularioVerificacion.secciones.proteccionAreasAltoValorConservacion.preguntas.fincaConsideradaAltoValor.preguntas.tipoAltoValor.respuesta);
  }

}
