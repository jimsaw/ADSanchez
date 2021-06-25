import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioLineaBase } from 'src/app/interfaces/formularioLineaBase';

@Component({
  selector: 'app-salud-seguridad-ocupacional',
  templateUrl: './salud-seguridad-ocupacional.component.html',
  styleUrls: ['./salud-seguridad-ocupacional.component.css']
})
export class SaludSeguridadOcupacionalComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  saludSeguridadOcupacional: FormGroup;

  opciones: string[] = ["SI", "NO"];

  tiposAccidente: string[] = ["LEVES", "GRAVES", "MUY GRAVES"];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.saludSeguridadOcupacional = this.formBuilder.group({
      accidentesLaboralesUltimoAnio: new FormControl(''),
      tipoAccidente: new FormControl(''),
      periodoIntoxicacionPresente: new FormControl(''),
      producto: new FormControl(''),
      centroSaludCercano: new FormControl('')
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  hayAccidente() {
    const hayAccidente = this.saludSeguridadOcupacional.get('accidentesLaboralesUltimoAnio').value;
    return hayAccidente === 'SI';
  }

  hayIntoxicado() {
    const hayIntoxicado = this.saludSeguridadOcupacional.get('periodoIntoxicacionPresente').value;
    return hayIntoxicado === 'SI';
  }

  get seccion(): any {
    return {
      preguntas: {
        accidentesLaboralesUltimoAnio: {
          respuesta: this.saludSeguridadOcupacional.value.accidentesLaboralesUltimoAnio,
          preguntas: {
            tipoAccidente: {
              respuesta: this.saludSeguridadOcupacional.value.tipoAccidente
            }
          }
        },
        periodoIntoxicacionPresente: {
          respuesta: this.saludSeguridadOcupacional.value.periodoIntoxicacionPresente,
          preguntas: {
            producto: {
              respuesta: this.saludSeguridadOcupacional.value.producto
            }
          }
        },
        centroSaludCercano: {
          respuesta: this.saludSeguridadOcupacional.value.centroSaludCercano
        }
      }
    };
  }

  setValues(formularioLineaBase: FormularioLineaBase): void {
    this.saludSeguridadOcupacional.get('accidentesLaboralesUltimoAnio')
      .setValue(formularioLineaBase.secciones.saludSeguridadOcupacional.preguntas.accidentesLaboralesUltimoAnio.respuesta);
    this.saludSeguridadOcupacional.get('tipoAccidente')
      .setValue(formularioLineaBase.secciones.saludSeguridadOcupacional.preguntas.accidentesLaboralesUltimoAnio.preguntas.tipoAccidente.respuesta);
    this.saludSeguridadOcupacional.get('periodoIntoxicacionPresente')
      .setValue(formularioLineaBase.secciones.saludSeguridadOcupacional.preguntas.periodoIntoxicacionPresente.respuesta);
    this.saludSeguridadOcupacional.get('producto')
      .setValue(formularioLineaBase.secciones.saludSeguridadOcupacional.preguntas.periodoIntoxicacionPresente.preguntas.producto.respuesta);
    this.saludSeguridadOcupacional.get('centroSaludCercano')
      .setValue(formularioLineaBase.secciones.saludSeguridadOcupacional.preguntas.centroSaludCercano.respuesta);
}

}
