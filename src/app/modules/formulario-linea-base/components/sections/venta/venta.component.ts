import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioLineaBase } from 'src/app/interfaces/formularioLineaBase';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  venta: FormGroup;

  propiedadesTransporte: string[] = ["PROPIO", "FLETADO"];

  tiposTransporte: string[] = ["CHIVA", "CAMIONETA", "MOTO", "CAMION", "OTRO"];

  opciones: string[] = ["SI", "NO"];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.venta = this.formBuilder.group({
      almacenaCacaoDespSecado: new FormControl(''),
      tiempoAlmacenadoCacao: new FormControl(''),
      propiedadTransporte: new FormControl(''),
      tipoTransporte: new FormControl(''),
      registroFinancieroFinca: new FormControl(''),
      tipoRegistrosFinancierosFinca: new FormControl('')
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  hayRegistro() {
    const hayRegistro = this.venta.get('registroFinancieroFinca').value;
    return hayRegistro === 'SI';
  }

  almacenaCacao() {
    const almacenaCacao = this.venta.get('almacenaCacaoDespSecado').value;
    return almacenaCacao === 'SI';
  }

  get seccion(): any {
    return {
      preguntas: {
        almacenaCacaoDespSecado: {
          respuesta: this.venta.value.almacenaCacaoDespSecado,
          preguntas: {
            tiempoAlmacenadoCacao: {
              respuesta: this.venta.value.tiempoAlmacenadoCacao
            }
          }
        },
        propiedadTransporte: {
          respuesta: this.venta.value.propiedadTransporte
        },
        tipoTransporte: {
          respuesta: this.venta.value.tipoTransporte
        },
        registroFinancieroFinca: {
          respuesta: this.venta.value.registroFinancieroFinca
        },
        tipoRegistrosFinancierosFinca: {
          respuesta: this.venta.value.tipoRegistrosFinancierosFinca
        }
      }
    };
  }

  setValues(formularioLineaBase: FormularioLineaBase): void {
    this.venta.get('almacenaCacaoDespSecado')
      .setValue(formularioLineaBase.secciones.venta.preguntas.almacenaCacaoDespSecado.respuesta);
    this.venta.get('tiempoAlmacenadoCacao')
      .setValue(formularioLineaBase.secciones.venta.preguntas.almacenaCacaoDespSecado.preguntas.tiempoAlmacenadoCacao.respuesta);
    this.venta.get('propiedadTransporte')
      .setValue(formularioLineaBase.secciones.venta.preguntas.propiedadTransporte.respuesta);
    this.venta.get('tipoTransporte')
      .setValue(formularioLineaBase.secciones.venta.preguntas.tipoTransporte.respuesta);
    this.venta.get('registroFinancieroFinca')
      .setValue(formularioLineaBase.secciones.venta.preguntas.registroFinancieroFinca.respuesta);
    this.venta.get('tipoRegistrosFinancierosFinca')
      .setValue(formularioLineaBase.secciones.venta.preguntas.tipoRegistrosFinancierosFinca.respuesta);
}

}
