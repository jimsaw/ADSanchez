import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioVerificacion } from 'src/app/interfaces/formularioVerificacion';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-conservacion-suelos-biodiversidad',
  templateUrl: './conservacion-suelos-biodiversidad.component.html',
  styleUrls: ['./conservacion-suelos-biodiversidad.component.css']
})
export class ConservacionSuelosBiodiversidadComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  conservacionSuelosBiodiversidad: FormGroup;

  yesNoAnswer: string[];
  practicasConservacionSuelo: string[];
  especiesArboles: string[];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.conservacionSuelosBiodiversidad = this.formBuilder.group({
      practicasConservacionSuelos: new FormControl(''),
      practicaDeforestacion: new FormControl(''),
      plantadoArbolesSombrioRecient: new FormControl(''),
      cuantosArbolesSombrio: new FormControl(''),
      promedioArbolesXHectarea: new FormControl(''),
      reforestadoOrillas: new FormControl(''),
      promedioArbolXHectarea12MAltura: new FormControl(''),
      especiesDiferentesArbolesXHectarea: new FormControl(''),
      especiesArbolesEnCultivo: new FormControl(''),
      especifiqueOtrosEspeciesArboles: new FormControl('')
    });
   }

  ngOnInit(): void {
    this.yesNoAnswer = environment.constantes.formularioVerificacion.yesNoAnswer;
    this.practicasConservacionSuelo = environment.constantes.formularioVerificacion.conservacionSuelosBiodiversidadPractivasConservacionSuelo;
    this.especiesArboles = environment.constantes.formularioVerificacion.conservacionSuelosBiodiversidadEspeciesArboles;
  }

  onSubmit() {

  }

  get seccion(): any {
    return {
      preguntas: {
        practicasConservacionSuelos: {
          respuesta: this.conservacionSuelosBiodiversidad.value.practicasConservacionSuelos
        },
        practicaDeforestacion: {
          respuesta: this.conservacionSuelosBiodiversidad.value.practicaDeforestacion
        },
        plantadoArbolesSombrioRecient: {
          respuesta: this.conservacionSuelosBiodiversidad.value.plantadoArbolesSombrioRecient,
          preguntas: {
            cuantosArbolesSombrio: {
              respuesta: this.conservacionSuelosBiodiversidad.value.cuantosArbolesSombrio
            },
            promedioArbolesXHectarea: {
              respuesta: this.conservacionSuelosBiodiversidad.value.promedioArbolesXHectarea
            },
            reforestadoOrillas: {
              respuesta: this.conservacionSuelosBiodiversidad.value.reforestadoOrillas
            }
          }
        },
        promedioArbolXHectarea12MAltura: {
          respuesta: this.conservacionSuelosBiodiversidad.value.promedioArbolXHectarea12MAltura
        },
        especiesDiferentesArbolesXHectarea: {
          respuesta: this.conservacionSuelosBiodiversidad.value.especiesDiferentesArbolesXHectarea
        },
        especiesArbolesEnCultivo: {
          respuesta: this.conservacionSuelosBiodiversidad.value.especiesArbolesEnCultivo,
          preguntas: {
            especifiqueOtrosEspeciesArboles: {
              respuesta: this.conservacionSuelosBiodiversidad.value.especifiqueOtrosEspeciesArboles
            }
          }
        }
      }
    };
  }

  setValues(formularioVerificacion: FormularioVerificacion): void {
    this.conservacionSuelosBiodiversidad.get('practicasConservacionSuelos')
      .setValue(formularioVerificacion.secciones.conservacionSuelosBiodiversidad.preguntas.practicasConservacionSuelos.respuesta);
    this.conservacionSuelosBiodiversidad.get('practicaDeforestacion')
      .setValue(formularioVerificacion.secciones.conservacionSuelosBiodiversidad.preguntas.practicaDeforestacion.respuesta);
    this.conservacionSuelosBiodiversidad.get('plantadoArbolesSombrioRecient')
      .setValue(formularioVerificacion.secciones.conservacionSuelosBiodiversidad.preguntas.plantadoArbolesSombrioRecient.respuesta);
    this.conservacionSuelosBiodiversidad.get('cuantosArbolesSombrio')
      .setValue(formularioVerificacion.secciones.conservacionSuelosBiodiversidad.preguntas.plantadoArbolesSombrioRecient.preguntas.cuantosArbolesSombrio.respuesta);
    this.conservacionSuelosBiodiversidad.get('promedioArbolesXHectarea')
      .setValue(formularioVerificacion.secciones.conservacionSuelosBiodiversidad.preguntas.plantadoArbolesSombrioRecient.preguntas.promedioArbolesXHectarea.respuesta);
    this.conservacionSuelosBiodiversidad.get('reforestadoOrillas')
      .setValue(formularioVerificacion.secciones.conservacionSuelosBiodiversidad.preguntas.plantadoArbolesSombrioRecient.preguntas.reforestadoOrillas.respuesta);
    this.conservacionSuelosBiodiversidad.get('promedioArbolXHectarea12MAltura')
      .setValue(formularioVerificacion.secciones.conservacionSuelosBiodiversidad.preguntas.promedioArbolXHectarea12MAltura.respuesta);
    this.conservacionSuelosBiodiversidad.get('especiesDiferentesArbolesXHectarea')
      .setValue(formularioVerificacion.secciones.conservacionSuelosBiodiversidad.preguntas.especiesDiferentesArbolesXHectarea.respuesta);
    this.conservacionSuelosBiodiversidad.get('especiesArbolesEnCultivo')
      .setValue(formularioVerificacion.secciones.conservacionSuelosBiodiversidad.preguntas.especiesArbolesEnCultivo.respuesta);
    this.conservacionSuelosBiodiversidad.get('especifiqueOtrosEspeciesArboles')
      .setValue(formularioVerificacion.secciones.conservacionSuelosBiodiversidad.preguntas.especiesArbolesEnCultivo.preguntas.especifiqueOtrosEspeciesArboles.respuesta);
  }

}
