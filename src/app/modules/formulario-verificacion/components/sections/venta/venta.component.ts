import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioVerificacion } from 'src/app/interfaces/formularioVerificacion';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  venta: FormGroup;

  yesNoAnswer: string[];
  frecuencia: string[];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.venta = this.formBuilder.group({
      personaVenderCacao: new FormControl(''),
      razon1: new FormControl(''),
      razon2: new FormControl(''),
      recibeBonosEmpresaProgramaLINDT: new FormControl(''),
      frecuenciaRecibeBono: new FormControl('')
    });
   }

  ngOnInit(): void {
    this.yesNoAnswer = environment.constantes.formularioVerificacion.yesNoAnswer;
    this.frecuencia = environment.constantes.formularioVerificacion.ventaFrecuencia;
  }

  onSubmit() {

  }

  recibeBonosEmpresaProgramaLINDT(): boolean {
    return this.venta.get('recibeBonosEmpresaProgramaLINDT').value === 'SI';
  }

  get seccion(): any {
    return {
      preguntas: {
        personaVenderCacao: {
          respuesta: this.venta.value.personaVenderCacao,
          preguntas: {
            razon1: {
              respuesta: this.venta.value.razon1
            },
            razon2: {
              respuesta: this.venta.value.razon2
            }
          }
        },
        recibeBonosEmpresaProgramaLINDT: {
          respuesta: this.venta.value.recibeBonosEmpresaProgramaLINDT,
          preguntas: {
            frecuenciaRecibeBono: {
              respuesta: this.venta.value.frecuenciaRecibeBono
            }
          }
        }
      }
    };
  }

  setValues(formularioVerificacion: FormularioVerificacion): void {
    this.venta.get('personaVenderCacao')
      .setValue(formularioVerificacion.secciones.venta.preguntas.personaVenderCacao.respuesta);
    this.venta.get('razon1')
      .setValue(formularioVerificacion.secciones.venta.preguntas.personaVenderCacao.preguntas.razon1.respuesta);
    this.venta.get('razon2')
      .setValue(formularioVerificacion.secciones.venta.preguntas.personaVenderCacao.preguntas.razon2.respuesta);
    this.venta.get('recibeBonosEmpresaProgramaLINDT')
      .setValue(formularioVerificacion.secciones.venta.preguntas.recibeBonosEmpresaProgramaLINDT.respuesta);
    this.venta.get('frecuenciaRecibeBono')
      .setValue(formularioVerificacion.secciones.venta.preguntas.recibeBonosEmpresaProgramaLINDT.preguntas.frecuenciaRecibeBono.respuesta);
  }

}
