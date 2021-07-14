import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioVerificacion } from 'src/app/interfaces/formularioVerificacion';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-control-malezas',
  templateUrl: './control-malezas.component.html',
  styleUrls: ['./control-malezas.component.css']
})
export class ControlMalezasComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  controlMalezas: FormGroup;

  yesNoAnswer: string[];
  tipoMaleza: string[];
  comoControlaMaleza: string[];
  haceUsoMisma: string[];
  tipoRecomendacion: string[];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.controlMalezas = this.formBuilder.group({
      controlaMalezas: new FormControl(''),
      tiposMalezaEncontrada: new FormControl(''),
      comoControlaMaleza: new FormControl(''),
      productoQuimicoUsado: new FormControl(''),
      regularidadProductoQuimicoUsado: new FormControl(''),
      recomendacionSeguidaAplicandoProductoQuimico: new FormControl(''),
      conocimientoDisposicionMaquinariaAgricola: new FormControl(''),
      haceUsoMisma: new FormControl(''),
      tiempoPromedioUso: new FormControl('')
    });
   }

  ngOnInit(): void {
    this.yesNoAnswer = environment.constantes.formularioVerificacion.yesNoAnswer;
    this.tipoMaleza = environment.constantes.formularioVerificacion.controlMalezaTipoMaleza;
    this.comoControlaMaleza = environment.constantes.formularioVerificacion.controlMalezaComoControlaMaleza;
    this.haceUsoMisma = environment.constantes.formularioVerificacion.vecesAlAnio;
    this.tipoRecomendacion = environment.constantes.formularioVerificacion.controlMalezaTipoRecomendacion;
  }

  onSubmit() {

  }

  controlaMalezas(): boolean {
    return this.controlMalezas.get('controlaMalezas').value === 'SI';
  }

  tipoControlaMaleza(): boolean {
    return this.controlMalezas.get('comoControlaMaleza').value === 'QUIMICO';
  }

  conocimientoDisposicionMaquinariaAgricola(): boolean {
    return this.controlMalezas.get('conocimientoDisposicionMaquinariaAgricola').value === 'SI';
  }

  get seccion(): any {
    return {
      preguntas: {
        controlaMalezas: {
          respuesta: this.controlMalezas.value.controlaMalezas,
          preguntas: {
            tiposMalezaEncontrada: {
              respuesta: this.controlMalezas.value.tiposMalezaEncontrada
            },
            comoControlaMaleza: {
              respuesta: this.controlMalezas.value.comoControlaMaleza,
              preguntas: {
                productoQuimicoUsado: {
                  respuesta: this.controlMalezas.value.productoQuimicoUsado
                },
                regularidadProductoQuimicoUsado: {
                  respuesta: this.controlMalezas.value.regularidadProductoQuimicoUsado
                },
                recomendacionSeguidaAplicandoProductoQuimico: {
                  respuesta: this.controlMalezas.value.recomendacionSeguidaAplicandoProductoQuimico
                }
              }
            }
          }
        },
        conocimientoDisposicionMaquinariaAgricola: {
          respuesta: this.controlMalezas.value.conocimientoDisposicionMaquinariaAgricola,
          preguntas: {
            haceUsoMisma: {
              respuesta: this.controlMalezas.value.haceUsoMisma
            },
            tiempoPromedioUso: {
              respuesta: this.controlMalezas.value.tiempoPromedioUso
            }
          }
        }
      }
    };
  }

  setValues(formularioVerificacion: FormularioVerificacion): void {
    this.controlMalezas.get('controlaMalezas')
      .setValue(formularioVerificacion.secciones.controlMalezas.preguntas.controlaMalezas.respuesta);
    this.controlMalezas.get('tiposMalezaEncontrada')
      .setValue(formularioVerificacion.secciones.controlMalezas.preguntas.controlaMalezas.preguntas.tiposMalezaEncontrada.respuesta);
    this.controlMalezas.get('comoControlaMaleza')
      .setValue(formularioVerificacion.secciones.controlMalezas.preguntas.controlaMalezas.preguntas.comoControlaMaleza.respuesta);
    this.controlMalezas.get('productoQuimicoUsado')
      .setValue(formularioVerificacion.secciones.controlMalezas.preguntas.controlaMalezas.preguntas.comoControlaMaleza.preguntas.productoQuimicoUsado.respuesta);
    this.controlMalezas.get('regularidadProductoQuimicoUsado')
      .setValue(formularioVerificacion.secciones.controlMalezas.preguntas.controlaMalezas.preguntas.comoControlaMaleza.preguntas.regularidadProductoQuimicoUsado.respuesta);
    this.controlMalezas.get('recomendacionSeguidaAplicandoProductoQuimico')
      .setValue(formularioVerificacion.secciones.controlMalezas.preguntas.controlaMalezas.preguntas.comoControlaMaleza.preguntas.recomendacionSeguidaAplicandoProductoQuimico.respuesta);
    this.controlMalezas.get('conocimientoDisposicionMaquinariaAgricola')
      .setValue(formularioVerificacion.secciones.controlMalezas.preguntas.conocimientoDisposicionMaquinariaAgricola.respuesta);
    this.controlMalezas.get('haceUsoMisma')
      .setValue(formularioVerificacion.secciones.controlMalezas.preguntas.conocimientoDisposicionMaquinariaAgricola.preguntas.haceUsoMisma.respuesta);
    this.controlMalezas.get('tiempoPromedioUso')
      .setValue(formularioVerificacion.secciones.controlMalezas.preguntas.conocimientoDisposicionMaquinariaAgricola.preguntas.tiempoPromedioUso.respuesta);
  }

}
