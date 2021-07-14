import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioVerificacion } from 'src/app/interfaces/formularioVerificacion';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-fertilizacion',
  templateUrl: './fertilizacion.component.html',
  styleUrls: ['./fertilizacion.component.css']
})
export class FertilizacionComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  fertilizacion: FormGroup;

  yesNoAnswer: string[];
  productoFertilizaCacaotal: string[];
  vecesAlAnio: string[];
  tipoFertilizanteRecibido: string[];
  percepcionFertilizanteRecibido: string[];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.fertilizacion = this.formBuilder.group({
      fertilizaCacaotales: new FormControl(''),
      tipoProductoUsado: new FormControl(''),
      usaFertilizanteEdafico: new FormControl(''),
      vecesUsadoAlAnioFertilizanteEdafico: new FormControl(''),
      usaFertilizanteFoliar: new FormControl(''),
      vecesUsadoAlAnioFertilizanteFoliar: new FormControl(''),
      recibidoFertilizanteKits: new FormControl(''),
      tipoFertilizanteRecibido: new FormControl(''),
      opinionEfectividadFertilizante: new FormControl(''),
      repetirCompraConDescuento: new FormControl(''),
      disminuidoProductosQuimicosPorOrganicos: new FormControl('')
    });
   }

  ngOnInit(): void {
    this.yesNoAnswer = environment.constantes.formularioVerificacion.yesNoAnswer;
    this.productoFertilizaCacaotal = environment.constantes.formularioVerificacion.fertilizacionTipoProductoFertilizaCacaotales;
    this.vecesAlAnio = environment.constantes.formularioVerificacion.vecesAlAnio;
    this.tipoFertilizanteRecibido = environment.constantes.formularioVerificacion.fertilizacionTipoFertilizanteRecibido;
    this.percepcionFertilizanteRecibido = environment.constantes.formularioVerificacion.fertilizacionPercepcionFertilizanteRecibido;
  }

  fertilizaCacaotales(): boolean {
    return this.fertilizacion.get('fertilizaCacaotales').value === 'SI';
  }

  usaFertilizanteEdafico(): boolean {
    return this.fertilizacion.get('usaFertilizanteEdafico').value === 'SI';
  }

  usaFertilizanteFoliar(): boolean {
    return this.fertilizacion.get('usaFertilizanteFoliar').value === 'SI';
  }

  haRecibidoFertilizanteKits(): boolean {
    return this.fertilizacion.get('recibidoFertilizanteKits').value === 'SI';
  }

  onSubmit() {

  }

  get seccion(): any {
    return {
      preguntas: {
        fertilizaCacaotales: {
          respuesta: this.fertilizacion.value.fertilizaCacaotales,
          preguntas: {
            tipoProductoUsado: {
              respuesta: this.fertilizacion.value.tipoProductoUsado
            }
          }
        },
        usaFertilizanteEdafico: {
          respuesta: this.fertilizacion.value.usaFertilizanteEdafico,
          preguntas: {
            vecesUsadoAlAnioFertilizanteEdafico: {
              respuesta: this.fertilizacion.value.vecesUsadoAlAnioFertilizanteEdafico
            }
          }
        },
        usaFertilizanteFoliar: {
          respuesta: this.fertilizacion.value.usaFertilizanteFoliar,
          preguntas: {
            vecesUsadoAlAnioFertilizanteFoliar: {
              respuesta: this.fertilizacion.value.vecesUsadoAlAnioFertilizanteFoliar
            }
          }
        },
        recibidoFertilizanteKits: {
          respuesta: this.fertilizacion.value.recibidoFertilizanteKits,
          preguntas: {
            tipoFertilizanteRecibido: {
              respuesta: this.fertilizacion.value.tipoFertilizanteRecibido
            }
          }
        },
        opinionEfectividadFertilizante: {
          respuesta: this.fertilizacion.value.opinionEfectividadFertilizante
        },
        repetirCompraConDescuento: {
          respuesta: this.fertilizacion.value.repetirCompraConDescuento
        },
        disminuidoProductosQuimicosPorOrganicos: {
          respuesta: this.fertilizacion.value.disminuidoProductosQuimicosPorOrganicos
        }
      }
    };
  }

  setValues(formularioVerificacion: FormularioVerificacion): void {
    this.fertilizacion.get('fertilizaCacaotales')
      .setValue(formularioVerificacion.secciones.fertilizacion.preguntas.fertilizaCacaotales.respuesta);
    this.fertilizacion.get('tipoProductoUsado')
      .setValue(formularioVerificacion.secciones.fertilizacion.preguntas.fertilizaCacaotales.preguntas.tipoProductoUsado.respuesta);
    this.fertilizacion.get('usaFertilizanteEdafico')
      .setValue(formularioVerificacion.secciones.fertilizacion.preguntas.usaFertilizanteEdafico.respuesta);
    this.fertilizacion.get('vecesUsadoAlAnioFertilizanteEdafico')
      .setValue(formularioVerificacion.secciones.fertilizacion.preguntas.usaFertilizanteEdafico.preguntas.vecesUsadoAlAnioFertilizanteEdafico.respuesta);
    this.fertilizacion.get('usaFertilizanteFoliar')
      .setValue(formularioVerificacion.secciones.fertilizacion.preguntas.usaFertilizanteFoliar.respuesta);
    this.fertilizacion.get('vecesUsadoAlAnioFertilizanteFoliar')
      .setValue(formularioVerificacion.secciones.fertilizacion.preguntas.usaFertilizanteFoliar.preguntas.vecesUsadoAlAnioFertilizanteFoliar.respuesta);
    this.fertilizacion.get('recibidoFertilizanteKits')
      .setValue(formularioVerificacion.secciones.fertilizacion.preguntas.recibidoFertilizanteKits.respuesta);
    this.fertilizacion.get('tipoFertilizanteRecibido')
      .setValue(formularioVerificacion.secciones.fertilizacion.preguntas.recibidoFertilizanteKits.preguntas.tipoFertilizanteRecibido.respuesta);
    this.fertilizacion.get('opinionEfectividadFertilizante')
      .setValue(formularioVerificacion.secciones.fertilizacion.preguntas.opinionEfectividadFertilizante.respuesta);
    this.fertilizacion.get('repetirCompraConDescuento')
      .setValue(formularioVerificacion.secciones.fertilizacion.preguntas.repetirCompraConDescuento.respuesta);
    this.fertilizacion.get('disminuidoProductosQuimicosPorOrganicos')
      .setValue(formularioVerificacion.secciones.fertilizacion.preguntas.disminuidoProductosQuimicosPorOrganicos.respuesta);
  }

}
