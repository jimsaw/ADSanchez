import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioVerificacion } from 'src/app/interfaces/formularioVerificacion';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-registros-productor',
  templateUrl: './registros-productor.component.html',
  styleUrls: ['./registros-productor.component.css']
})
export class RegistrosProductorComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  registrosProductor: FormGroup;

  yesNoAnswer: string[];
  especifiqueTipoCuenta: string[];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.registrosProductor = this.formBuilder.group({
      ventaAnualCacaoQuintales: new FormControl(''),
      ventaAnualCacaoUSD: new FormControl(''),
      egresoCompraMateriales: new FormControl(''),
      egresoManoObra: new FormControl(''),
      manejoCuadernilloRegistros: new FormControl(''),
      manejoCostosPlanificacionFinanciera: new FormControl(''),
      disponibilidadAhorrarEnCuenta: new FormControl(''),
      tipoInstitucionAhorroCuenta: new FormControl('')
    });
   }

  ngOnInit(): void {
    this.yesNoAnswer = environment.constantes.formularioVerificacion.yesNoAnswer;
    this.especifiqueTipoCuenta = environment.constantes.formularioVerificacion.registrosProductorEspecifiqueTipoCuenta;
  }

  onSubmit() {

  }

  disponibilidadAhorrarEnCuenta(): boolean {
    return this.registrosProductor.get('disponibilidadAhorrarEnCuenta').value === 'SI';
  }

  get seccion(): any {
    return {
      preguntas: {
        ventaAnualCacaoQuintales: {
          respuesta: this.registrosProductor.value.ventaAnualCacaoQuintales
        },
        ventaAnualCacaoUSD: {
          respuesta: this.registrosProductor.value.ventaAnualCacaoUSD
        },
        egresoCompraMateriales: {
          respuesta: this.registrosProductor.value.egresoCompraMateriales
        },
        egresoManoObra: {
          respuesta: this.registrosProductor.value.egresoManoObra
        },
        manejoCuadernilloRegistros: {
          respuesta: this.registrosProductor.value.manejoCuadernilloRegistros
        },
        manejoCostosPlanificacionFinanciera: {
          respuesta: this.registrosProductor.value.manejoCostosPlanificacionFinanciera
        },
        disponibilidadAhorrarEnCuenta: {
          respuesta: this.registrosProductor.value.disponibilidadAhorrarEnCuenta,
          preguntas: {
            tipoInstitucionAhorroCuenta: {
              respuesta: this.registrosProductor.value.tipoInstitucionAhorroCuenta
            }
          }
        }
      }
    };
  }

  setValues(formularioVerificacion: FormularioVerificacion): void {
    this.registrosProductor.get('ventaAnualCacaoQuintales')
      .setValue(formularioVerificacion.secciones.registrosProductor.preguntas.ventaAnualCacaoQuintales.respuesta);
    this.registrosProductor.get('ventaAnualCacaoUSD')
      .setValue(formularioVerificacion.secciones.registrosProductor.preguntas.ventaAnualCacaoUSD.respuesta);
    this.registrosProductor.get('egresoCompraMateriales')
      .setValue(formularioVerificacion.secciones.registrosProductor.preguntas.egresoCompraMateriales.respuesta);
    this.registrosProductor.get('egresoManoObra')
      .setValue(formularioVerificacion.secciones.registrosProductor.preguntas.egresoManoObra.respuesta);
    this.registrosProductor.get('manejoCuadernilloRegistros')
      .setValue(formularioVerificacion.secciones.registrosProductor.preguntas.manejoCuadernilloRegistros.respuesta);
    this.registrosProductor.get('manejoCostosPlanificacionFinanciera')
      .setValue(formularioVerificacion.secciones.registrosProductor.preguntas.manejoCostosPlanificacionFinanciera.respuesta);
    this.registrosProductor.get('disponibilidadAhorrarEnCuenta')
      .setValue(formularioVerificacion.secciones.registrosProductor.preguntas.disponibilidadAhorrarEnCuenta.respuesta);
    this.registrosProductor.get('tipoInstitucionAhorroCuenta')
      .setValue(formularioVerificacion.secciones.registrosProductor.preguntas.disponibilidadAhorrarEnCuenta.preguntas.tipoInstitucionAhorroCuenta.respuesta);
  }

}
