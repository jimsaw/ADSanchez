import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioVerificacion } from 'src/app/interfaces/formularioVerificacion';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-poda',
  templateUrl: './poda.component.html',
  styleUrls: ['./poda.component.css']
})
export class PodaComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  poda: FormGroup;

  yesNoAnswer: string[];
  tipoPodaAplica: string[];
  enfermedades: string[];
  plagas: string[];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.poda = this.formBuilder.group({
      realizaPoda: new FormControl(''),
      tipoPoda: new FormControl(''),
      podaEsCorrecta: new FormControl(''),
      cortesLaceracionesPlantaMalaPoda: new FormControl(''),
      mazorcasEstadoPudricion: new FormControl(''),
      malaPodaAlbergaPlagasEnfermedades: new FormControl(''),
      plagasMalaPoda: new FormControl(''),
      enfermedadesMalaPoda: new FormControl('')
    });
   }

  ngOnInit(): void {
    this.yesNoAnswer = environment.constantes.formularioVerificacion.yesNoAnswer;
    this.tipoPodaAplica = environment.constantes.formularioVerificacion.podaTipoPodaAplica;
    this.enfermedades = environment.constantes.formularioVerificacion.podaEnfermedades;
    this.plagas = environment.constantes.formularioVerificacion.podaPlagas;
  }

  onSubmit() {

  }

  get seccion(): any {
    return {
      preguntas: {
        realizaPoda: {
          respuesta: this.poda.value.realizaPoda,
          preguntas: {
            tipoPoda: {
              respuesta: this.poda.value.tipoPoda
            },
            podaEsCorrecta: {
              respuesta: this.poda.value.podaEsCorrecta
            }
          }
        },
        cortesLaceracionesPlantaMalaPoda: {
          respuesta: this.poda.value.cortesLaceracionesPlantaMalaPoda
        },
        mazorcasEstadoPudricion: {
          respuesta: this.poda.value.mazorcasEstadoPudricion
        },
        malaPodaAlbergaPlagasEnfermedades: {
          respuesta: this.poda.value.malaPodaAlbergaPlagasEnfermedades,
          preguntas: {
            plagasMalaPoda: {
              respuesta: this.poda.value.plagasMalaPoda
            },
            enfermedadesMalaPoda: {
              respuesta: this.poda.value.enfermedadesMalaPoda
            }
          }
        }
      }
    };
  }

  setValues(formularioVerificacion: FormularioVerificacion): void {
    this.poda.get('realizaPoda')
      .setValue(formularioVerificacion.secciones.poda.preguntas.realizaPoda.respuesta);
    this.poda.get('tipoPoda')
      .setValue(formularioVerificacion.secciones.poda.preguntas.realizaPoda.preguntas.tipoPoda.respuesta);
    this.poda.get('podaEsCorrecta')
      .setValue(formularioVerificacion.secciones.poda.preguntas.realizaPoda.preguntas.podaEsCorrecta.respuesta);
    this.poda.get('cortesLaceracionesPlantaMalaPoda')
      .setValue(formularioVerificacion.secciones.poda.preguntas.cortesLaceracionesPlantaMalaPoda.respuesta);
    this.poda.get('mazorcasEstadoPudricion')
      .setValue(formularioVerificacion.secciones.poda.preguntas.mazorcasEstadoPudricion.respuesta);
    this.poda.get('malaPodaAlbergaPlagasEnfermedades')
      .setValue(formularioVerificacion.secciones.poda.preguntas.malaPodaAlbergaPlagasEnfermedades.respuesta);
    this.poda.get('plagasMalaPoda')
      .setValue(formularioVerificacion.secciones.poda.preguntas.malaPodaAlbergaPlagasEnfermedades.preguntas.plagasMalaPoda.respuesta);
    this.poda.get('enfermedadesMalaPoda')
      .setValue(formularioVerificacion.secciones.poda.preguntas.malaPodaAlbergaPlagasEnfermedades.preguntas.enfermedadesMalaPoda.respuesta);
  }

}
