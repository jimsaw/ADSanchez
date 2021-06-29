import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioVerificacion } from 'src/app/interfaces/formularioVerificacion';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-salud-seguridad-ocupacional',
  templateUrl: './salud-seguridad-ocupacional.component.html',
  styleUrls: ['./salud-seguridad-ocupacional.component.css']
})
export class SaludSeguridadOcupacionalComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  saludSeguridadOcupacional: FormGroup;

  yesNoAnswer: string[];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.saludSeguridadOcupacional = this.formBuilder.group({
      trabajadoresLlevadosCapacitacionesSSO: new FormControl(''),
      usoPictograma: new FormControl(''),
      buenasPracticasFincaTrabajadores: new FormControl(''),
      botiquin: new FormControl(''),
      eppAntesPlaguicida: new FormControl(''),
      instruccionesPrimerosAuxilios: new FormControl('')
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
        trabajadoresLlevadosCapacitacionesSSO: {
          respuesta: this.saludSeguridadOcupacional.value.trabajadoresLlevadosCapacitacionesSSO
        },
        usoPictograma: {
          respuesta: this.saludSeguridadOcupacional.value.usoPictograma
        },
        buenasPracticasFincaTrabajadores: {
          respuesta: this.saludSeguridadOcupacional.value.buenasPracticasFincaTrabajadores
        },
        botiquin: {
          respuesta: this.saludSeguridadOcupacional.value.botiquin
        },
        eppAntesPlaguicida: {
          respuesta: this.saludSeguridadOcupacional.value.eppAntesPlaguicida
        },
        instruccionesPrimerosAuxilios: {
          respuesta: this.saludSeguridadOcupacional.value.instruccionesPrimerosAuxilios
        }
      }
    };
  }

  setValues(formularioVerificacion: FormularioVerificacion): void {
    this.saludSeguridadOcupacional.get('trabajadoresLlevadosCapacitacionesSSO')
      .setValue(formularioVerificacion.secciones.saludSeguridadOcupacional.preguntas.trabajadoresLlevadosCapacitacionesSSO.respuesta);
    this.saludSeguridadOcupacional.get('usoPictograma')
      .setValue(formularioVerificacion.secciones.saludSeguridadOcupacional.preguntas.usoPictograma.respuesta);
    this.saludSeguridadOcupacional.get('buenasPracticasFincaTrabajadores')
      .setValue(formularioVerificacion.secciones.saludSeguridadOcupacional.preguntas.buenasPracticasFincaTrabajadores.respuesta);
    this.saludSeguridadOcupacional.get('botiquin')
      .setValue(formularioVerificacion.secciones.saludSeguridadOcupacional.preguntas.botiquin.respuesta);
    this.saludSeguridadOcupacional.get('eppAntesPlaguicida')
      .setValue(formularioVerificacion.secciones.saludSeguridadOcupacional.preguntas.eppAntesPlaguicida.respuesta);
    this.saludSeguridadOcupacional.get('instruccionesPrimerosAuxilios')
      .setValue(formularioVerificacion.secciones.saludSeguridadOcupacional.preguntas.instruccionesPrimerosAuxilios.respuesta);
  }

}
