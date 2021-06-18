import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioLineaBase } from 'src/app/interfaces/formularioLineaBase';

@Component({
  selector: 'app-practicas-agricolas',
  templateUrl: './practicas-agricolas.component.html',
  styleUrls: ['./practicas-agricolas.component.css']
})
export class PracticasAgricolasComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  practicasAgricolas: FormGroup;

  opciones: string[] = ["SI", "NO"];

  plagas: string[] = ["COCHINILLA", "XILEBORUS", "TRIPS", "CHINCHORRO", "HORMIGA", "OROZCO", "OTROS"];

  enfermedades: string[] = ["PHYTOPHTORA", "ESCOBA BRUJA", "MONILLA", "MAL DE MACHETE", "OTROS"];

  meses: string[] = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"]

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.practicasAgricolas = this.formBuilder.group({
      interesElaborarFertilizanteNaturalOrganico: new FormControl(''),
      plagasAfectanCultivo: new FormControl(''),
      enfermedadesAfectanCultivo: new FormControl(''),
      productoParaPlagas: new FormControl(''),
      productoParaEnfermedades: new FormControl(''),
      llevaRegistroPerdidasMazorcasXMonilla: new FormControl(''),
      cantidadPerdidaMazorcas: new FormControl(''),
      periodoFertilizacion: new FormControl(''),
      periodoPoda: new FormControl(''),
      periodoControlMaleza: new FormControl(''),
      periodoMIPE: new FormControl(''),
      periodoCosecha: new FormControl('')
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  llevaRegistroPerdidas() {
    const llevaRegistroPerdidas = this.practicasAgricolas.get('llevaRegistroPerdidasMazorcasXMonilla').value;
    return llevaRegistroPerdidas === 'SI';
  }

  get seccion(): any {
    return {
      preguntas: {
        interesElaborarFertilizanteNaturalOrganico: {
          respuesta: this.practicasAgricolas.value.interesElaborarFertilizanteNaturalOrganico
        },
        plagasAfectanCultivo: {
          respuesta: this.practicasAgricolas.value.plagasAfectanCultivo
        },
        enfermedadesAfectanCultivo: {
          respuesta: this.practicasAgricolas.value.enfermedadesAfectanCultivo
        },
        productoParaPlagas: {
          respuesta: this.practicasAgricolas.value.productoParaPlagas
        },
        productoParaEnfermedades: {
          respuesta: this.practicasAgricolas.value.productoParaEnfermedades
        },
        llevaRegistroPerdidasMazorcasXMonilla: {
          respuesta: this.practicasAgricolas.value.llevaRegistroPerdidasMazorcasXMonilla,
          preguntas: {
            cantidadPerdidaMazorcas: {
              respuesta: this.practicasAgricolas.value.cantidadPerdidaMazorcas
            }
          }
        },
        periodoFertilizacion: {
          respuesta: this.practicasAgricolas.value.periodoFertilizacion
        },
        periodoPoda: {
          respuesta: this.practicasAgricolas.value.periodoPoda
        },
        periodoControlMaleza: {
          respuesta: this.practicasAgricolas.value.periodoControlMaleza
        },
        periodoMIPE: {
          respuesta: this.practicasAgricolas.value.periodoMIPE
        },
        periodoCosecha: {
          respuesta: this.practicasAgricolas.value.periodoCosecha
        }
      }
    };
  }

  setValues(formularioLineaBase: FormularioLineaBase): void {
    this.practicasAgricolas.get('interesElaborarFertilizanteNaturalOrganico')
      .setValue(formularioLineaBase.secciones.practicasAgricolas.preguntas.interesElaborarFertilizanteNaturalOrganico.respuesta);
    this.practicasAgricolas.get('plagasAfectanCultivo')
      .setValue(formularioLineaBase.secciones.practicasAgricolas.preguntas.plagasAfectanCultivo.respuesta);
    this.practicasAgricolas.get('enfermedadesAfectanCultivo')
      .setValue(formularioLineaBase.secciones.practicasAgricolas.preguntas.enfermedadesAfectanCultivo.respuesta);
    this.practicasAgricolas.get('productoParaPlagas')
      .setValue(formularioLineaBase.secciones.practicasAgricolas.preguntas.productoParaPlagas.respuesta);
    this.practicasAgricolas.get('productoParaEnfermedades')
      .setValue(formularioLineaBase.secciones.practicasAgricolas.preguntas.productoParaEnfermedades.respuesta);
    this.practicasAgricolas.get('llevaRegistroPerdidasMazorcasXMonilla')
      .setValue(formularioLineaBase.secciones.practicasAgricolas.preguntas.llevaRegistroPerdidasMazorcasXMonilla.respuesta);
    this.practicasAgricolas.get('cantidadPerdidaMazorcas')
      .setValue(formularioLineaBase.secciones.practicasAgricolas.preguntas.llevaRegistroPerdidasMazorcasXMonilla.preguntas.cantidadPerdidaMazorcas.respuesta);
    this.practicasAgricolas.get('periodoFertilizacion')
      .setValue(formularioLineaBase.secciones.practicasAgricolas.preguntas.periodoFertilizacion.respuesta);
    this.practicasAgricolas.get('periodoPoda')
      .setValue(formularioLineaBase.secciones.practicasAgricolas.preguntas.periodoPoda.respuesta);
    this.practicasAgricolas.get('periodoControlMaleza')
      .setValue(formularioLineaBase.secciones.practicasAgricolas.preguntas.periodoControlMaleza.respuesta);
    this.practicasAgricolas.get('periodoMIPE')
      .setValue(formularioLineaBase.secciones.practicasAgricolas.preguntas.periodoMIPE.respuesta);
    this.practicasAgricolas.get('periodoCosecha')
      .setValue(formularioLineaBase.secciones.practicasAgricolas.preguntas.periodoCosecha.respuesta);
  }

}
