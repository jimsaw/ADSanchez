import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioVerificacion } from 'src/app/interfaces/formularioVerificacion';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-secado',
  templateUrl: './secado.component.html',
  styleUrls: ['./secado.component.css']
})
export class SecadoComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  secado: FormGroup;

  yesNoAnswer: string[];
  nivelHumedad: string[];
  comoRealizaSecado: string[];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.secado = this.formBuilder.group({
      nivelHumedadCacaoVendido: new FormControl(''),
      maneraRealzarSecado: new FormControl(''),
      mejoraIngresoMejorTratamientoSecadoCacao: new FormControl('')
    });
   }

  ngOnInit(): void {
    this.yesNoAnswer = environment.constantes.formularioVerificacion.yesNoAnswer;
    this.nivelHumedad = environment.constantes.formularioVerificacion.secadoNivelHumedad;
    this.comoRealizaSecado = environment.constantes.formularioVerificacion.secadoComoRealizaSecado;
  }

  onSubmit() {

  }

  get seccion(): any {
    return {
      preguntas: {
        nivelHumedadCacaoVendido: {
          respuesta: this.secado.value.nivelHumedadCacaoVendido
        },
        maneraRealzarSecado: {
          respuesta: this.secado.value.maneraRealzarSecado
        },
        mejoraIngresoMejorTratamientoSecadoCacao: {
          respuesta: this.secado.value.mejoraIngresoMejorTratamientoSecadoCacao
        }
      }
    };
  }

  setValues(formularioVerificacion: FormularioVerificacion): void {
    this.secado.get('nivelHumedadCacaoVendido')
      .setValue(formularioVerificacion.secciones.secado.preguntas.nivelHumedadCacaoVendido.respuesta);
    this.secado.get('maneraRealzarSecado')
      .setValue(formularioVerificacion.secciones.secado.preguntas.maneraRealzarSecado.respuesta);
    this.secado.get('mejoraIngresoMejorTratamientoSecadoCacao')
      .setValue(formularioVerificacion.secciones.secado.preguntas.mejoraIngresoMejorTratamientoSecadoCacao.respuesta);
  }

}
