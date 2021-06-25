import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioLineaBase } from 'src/app/interfaces/formularioLineaBase';

@Component({
  selector: 'app-cacao-cnn',
  templateUrl: './cacao-cnn.component.html',
  styleUrls: ['./cacao-cnn.component.css']
})
export class CacaoCNNComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  public cacaoCNN: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.cacaoCNN =  this.formBuilder.group({
      areaTotalCNN: new FormControl(''),
      areaProduccion: new FormControl(''),
      edadCacaoProductivo: new FormControl(''),
      areaRecienSembrada: new FormControl(''),
      edadCacaoReciente: new FormControl(''),
      produccionAnioAnteriorCacaoCNN: new FormControl(''),
      precioPromedio: new FormControl('')
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  get seccion(): any {
    return {
      preguntas: {
        areaTotalCNN: {
          respuesta: this.cacaoCNN.value.areaTotalCNN
        },
        areaProduccion: {
          respuesta: this.cacaoCNN.value.areaProduccion
        },
        edadCacaoProductivo: {
          respuesta: this.cacaoCNN.value.edadCacaoProductivo
        },
        areaRecienSembrada: {
          respuesta: this.cacaoCNN.value.areaRecienSembrada
        },
        edadCacaoReciente: {
          respuesta: this.cacaoCNN.value.edadCacaoReciente
        },
        produccionAnioAnteriorCacaoCNN: {
          respuesta: this.cacaoCNN.value.produccionAnioAnteriorCacaoCNN
        },
        precioPromedio: {
          respuesta: this.cacaoCNN.value.precioPromedio
        }
      }
    };
  }

  setValues(formularioLineaBase: FormularioLineaBase): void {
    this.cacaoCNN.get('areaTotalCNN')
      .setValue(formularioLineaBase.secciones.cacaoCNN.preguntas.areaTotalCNN.respuesta);
    this.cacaoCNN.get('areaProduccion')
      .setValue(formularioLineaBase.secciones.cacaoCNN.preguntas.areaProduccion.respuesta);
    this.cacaoCNN.get('edadCacaoProductivo')
      .setValue(formularioLineaBase.secciones.cacaoCNN.preguntas.edadCacaoProductivo.respuesta);
    this.cacaoCNN.get('areaRecienSembrada')
      .setValue(formularioLineaBase.secciones.cacaoCNN.preguntas.areaRecienSembrada.respuesta);
    this.cacaoCNN.get('edadCacaoReciente')
      .setValue(formularioLineaBase.secciones.cacaoCNN.preguntas.edadCacaoReciente.respuesta);
    this.cacaoCNN.get('produccionAnioAnteriorCacaoCNN')
      .setValue(formularioLineaBase.secciones.cacaoCNN.preguntas.produccionAnioAnteriorCacaoCNN.respuesta);
    this.cacaoCNN.get('precioPromedio')
      .setValue(formularioLineaBase.secciones.cacaoCNN.preguntas.precioPromedio.respuesta);
}

}
