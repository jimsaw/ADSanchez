import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioLineaBase } from 'src/app/interfaces/formularioLineaBase';

@Component({
  selector: 'app-mejorar-calidad-cacao',
  templateUrl: './mejorar-calidad-cacao.component.html',
  styleUrls: ['./mejorar-calidad-cacao.component.css']
})
export class MejorarCalidadCacaoComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  mejorarCalidadCacao: FormGroup;

  proyectos: string[] = [
    "BANDEJAS O CAJONES DE FERMENTACION",
    "TENDALES ELEVADOS DE CAÑA",
    "SECADORAS COMUNITARIAS"
  ];

  opciones: string[] = [
    "SI", "NO"
  ]

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.mejorarCalidadCacao = this.formBuilder.group({
      bandejasCajonesFermentacion: new FormControl(''),
      dispuestoHacerloPropiaCuenta: new FormControl(''),
      tendalesElevadosCania: new FormControl(''),
      secadorasComunitarias: new FormControl(''),
      contarAgrupacionParaProyecto: new FormControl('')
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  get seccion(): any {
    return {
      preguntas: {
        bandejasCajonesFermentacion: {
          respuesta: this.mejorarCalidadCacao.value.bandejasCajonesFermentacion,
          preguntas: {
            dispuestoHacerloPropiaCuenta: {
              respuesta: this.mejorarCalidadCacao.value.dispuestoHacerloPropiaCuenta
            }
          }
        },
        tendalesElevadosCania: {
          respuesta: this.mejorarCalidadCacao.value.tendalesElevadosCania
        },
        secadorasComunitarias: {
          respuesta: this.mejorarCalidadCacao.value.secadorasComunitarias,
          preguntas: {
            contarAgrupacionParaProyecto: {
              respuesta: this.mejorarCalidadCacao.value.contarAgrupacionParaProyecto
            }
          }
        }
      }
    };
  }

  setValues(formularioLineaBase: FormularioLineaBase): void {
    this.mejorarCalidadCacao.get('bandejasCajonesFermentacion')
      .setValue(formularioLineaBase.secciones.mejorarCalidadCacao.preguntas.bandejasCajonesFermentacion.respuesta);
    this.mejorarCalidadCacao.get('dispuestoHacerloPropiaCuenta')
      .setValue(formularioLineaBase.secciones.mejorarCalidadCacao.preguntas.bandejasCajonesFermentacion.preguntas.dispuestoHacerloPropiaCuenta.respuesta);
    this.mejorarCalidadCacao.get('tendalesElevadosCania')
      .setValue(formularioLineaBase.secciones.mejorarCalidadCacao.preguntas.tendalesElevadosCania.respuesta);
    this.mejorarCalidadCacao.get('secadorasComunitarias')
      .setValue(formularioLineaBase.secciones.mejorarCalidadCacao.preguntas.secadorasComunitarias.respuesta);
    this.mejorarCalidadCacao.get('contarAgrupacionParaProyecto')
      .setValue(formularioLineaBase.secciones.mejorarCalidadCacao.preguntas.secadorasComunitarias.preguntas.contarAgrupacionParaProyecto.respuesta);
  }

}
