import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioVerificacion } from 'src/app/interfaces/formularioVerificacion';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-fermentacion',
  templateUrl: './fermentacion.component.html',
  styleUrls: ['./fermentacion.component.css']
})
export class FermentacionComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  fermentacion: FormGroup;

  yesNoAnswer: string[];
  fermentaCacao: string[];
  razonNoFermenta: string[];
  comoLoHace1: string[];
  comoLoHace2: string[];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.fermentacion = this.formBuilder.group({
      fermentaCacao: new FormControl(''),
      razonNoFermenta: new FormControl(''),
      modoFermentacion: new FormControl(''),
      medidasHigieneFermentacion: new FormControl(''),
      aumentoIngresoPorFermentacion: new FormControl('')
    });
   }

  ngOnInit(): void {
    this.yesNoAnswer = environment.constantes.formularioVerificacion.yesNoAnswer;
    this.fermentaCacao = environment.constantes.formularioVerificacion.fermentacionFermentaCacao;
    this.razonNoFermenta = environment.constantes.formularioVerificacion.fermentacionRazonNoFermenta;
    this.comoLoHace1 = environment.constantes.formularioVerificacion.fermentacionComoHace1;
    this.comoLoHace2 = environment.constantes.formularioVerificacion.fermentacionComoHace2;
  }

  onSubmit() {

  }

  get seccion(): any {
    return {
      preguntas: {
        fermentaCacao: {
          respuesta: this.fermentacion.value.fermentaCacao,
          preguntas: {
            razonNoFermenta: {
              respuesta: this.fermentacion.value.razonNoFermenta
            },
            modoFermentacion: {
              respuesta: this.fermentacion.value.modoFermentacion
            },
            medidasHigieneFermentacion: {
              respuesta: this.fermentacion.value.medidasHigieneFermentacion
            },
            aumentoIngresoPorFermentacion: {
              respuesta: this.fermentacion.value.aumentoIngresoPorFermentacion
            }
          }
        }
      }
    };
  }

  setValues(formularioVerificacion: FormularioVerificacion): void {
    this.fermentacion.get('fermentaCacao')
      .setValue(formularioVerificacion.secciones.fermentacion.preguntas.fermentaCacao.respuesta);
    this.fermentacion.get('razonNoFermenta')
      .setValue(formularioVerificacion.secciones.fermentacion.preguntas.fermentaCacao.preguntas.razonNoFermenta.respuesta);
    this.fermentacion.get('modoFermentacion')
      .setValue(formularioVerificacion.secciones.fermentacion.preguntas.fermentaCacao.preguntas.modoFermentacion.respuesta);
    this.fermentacion.get('medidasHigieneFermentacion')
      .setValue(formularioVerificacion.secciones.fermentacion.preguntas.fermentaCacao.preguntas.medidasHigieneFermentacion.respuesta);
    this.fermentacion.get('aumentoIngresoPorFermentacion')
      .setValue(formularioVerificacion.secciones.fermentacion.preguntas.fermentaCacao.preguntas.aumentoIngresoPorFermentacion.respuesta);
  }

}
