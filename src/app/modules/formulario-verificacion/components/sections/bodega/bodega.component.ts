import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioVerificacion } from 'src/app/interfaces/formularioVerificacion';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-bodega',
  templateUrl: './bodega.component.html',
  styleUrls: ['./bodega.component.css']
})
export class BodegaComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  bodega: FormGroup;

  yesNoAnswer: string[];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.bodega = this.formBuilder.group({
      poseeBodega: new FormControl(''),
      bodegaSegura: new FormControl(''),
      bodegaOrdenada: new FormControl(''),
      clasificadaXProducto: new FormControl(''),
      tieneRegistroAlmacena: new FormControl(''),
      cuentaDuchaEmergencia: new FormControl(''),
      conocimientoProdcutosPermitidosLINDT: new FormControl('')
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
        poseeBodega: {
          respuesta: this.bodega.value.poseeBodega
        },
        bodegaSegura: {
          respuesta: this.bodega.value.bodegaSegura
        },
        bodegaOrdenada: {
          respuesta: this.bodega.value.bodegaOrdenada
        },
        clasificadaXProducto: {
          respuesta: this.bodega.value.clasificadaXProducto
        },
        tieneRegistroAlmacena: {
          respuesta: this.bodega.value.tieneRegistroAlmacena
        },
        cuentaDuchaEmergencia: {
          respuesta: this.bodega.value.cuentaDuchaEmergencia
        },
        conocimientoProdcutosPermitidosLINDT: {
          respuesta: this.bodega.value.conocimientoProdcutosPermitidosLINDT
        }
      }
    };
  }

  setValues(formularioVerificacion: FormularioVerificacion): void {
    this.bodega.get('poseeBodega')
      .setValue(formularioVerificacion.secciones.bodega.preguntas.poseeBodega.respuesta);
    this.bodega.get('bodegaSegura')
      .setValue(formularioVerificacion.secciones.bodega.preguntas.bodegaSegura.respuesta);
    this.bodega.get('bodegaOrdenada')
      .setValue(formularioVerificacion.secciones.bodega.preguntas.bodegaOrdenada.respuesta);
    this.bodega.get('clasificadaXProducto')
      .setValue(formularioVerificacion.secciones.bodega.preguntas.clasificadaXProducto.respuesta);
    this.bodega.get('tieneRegistroAlmacena')
      .setValue(formularioVerificacion.secciones.bodega.preguntas.tieneRegistroAlmacena.respuesta);
    this.bodega.get('cuentaDuchaEmergencia')
      .setValue(formularioVerificacion.secciones.bodega.preguntas.cuentaDuchaEmergencia.respuesta);
    this.bodega.get('conocimientoProdcutosPermitidosLINDT')
      .setValue(formularioVerificacion.secciones.bodega.preguntas.conocimientoProdcutosPermitidosLINDT.respuesta);
  }

}
