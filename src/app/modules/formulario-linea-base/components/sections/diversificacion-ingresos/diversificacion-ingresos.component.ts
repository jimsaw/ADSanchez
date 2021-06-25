import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioLineaBase } from 'src/app/interfaces/formularioLineaBase';

@Component({
  selector: 'app-diversificacion-ingresos',
  templateUrl: './diversificacion-ingresos.component.html',
  styleUrls: ['./diversificacion-ingresos.component.css']
})
export class DiversificacionIngresosComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  diversificacionIngresos: FormGroup;

  proyectos: string[] = [
    "HUERTOS ORGANICOS",
    "DESARROLLO DE VIVEROS",
    "DESARROLLO Y VENTA DE FERTILIZANTES",
    "REHABILITACIÓN DE FINCA",
    "BRIGADA DE PODADORES"
  ];

  opciones: string[] = [
    "SI", "NO"
  ]

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.diversificacionIngresos = this.formBuilder.group({
      huertosOrganicos: new FormControl(''),
      desarrolloViveros: new FormControl(''),
      desarrolloVentaFertilizantes: new FormControl(''),
      rehabilitacionFinca: new FormControl(''),
      brigadaPodadores: new FormControl(''),
      contarExperienciaPoda: new FormControl(''),
      aniosExperiencia: new FormControl('')
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  tieneExperiencia() {
    const tieneExperiencia = this.diversificacionIngresos.get('contarExperienciaPoda').value;
    return tieneExperiencia === 'SI';
  }

  get seccion(): any {
    return {
      preguntas: {
        huertosOrganicos: {
          respuesta: this.diversificacionIngresos.value.huertosOrganicos
        },
        desarrolloViveros: {
          respuesta: this.diversificacionIngresos.value.desarrolloViveros
        },
        desarrolloVentaFertilizantes: {
          respuesta: this.diversificacionIngresos.value.desarrolloVentaFertilizantes
        },
        rehabilitacionFinca: {
          respuesta: this.diversificacionIngresos.value.rehabilitacionFinca
        },
        brigadaPodadores: {
          respuesta: this.diversificacionIngresos.value.brigadaPodadores,
          preguntas: {
            contarExperienciaPoda: {
              respuesta: this.diversificacionIngresos.value.contarExperienciaPoda,
              preguntas: {
                aniosExperiencia: {
                  respuesta: this.diversificacionIngresos.value.aniosExperiencia
                }
              }
            }
          }
        }
      }
    };
  }

  setValues(formularioLineaBase: FormularioLineaBase): void {
    this.diversificacionIngresos.get('huertosOrganicos')
      .setValue(formularioLineaBase.secciones.diversificacionIngresos.preguntas.huertosOrganicos.respuesta);
    this.diversificacionIngresos.get('desarrolloViveros')
      .setValue(formularioLineaBase.secciones.diversificacionIngresos.preguntas.desarrolloViveros.respuesta);
    this.diversificacionIngresos.get('desarrolloVentaFertilizantes')
      .setValue(formularioLineaBase.secciones.diversificacionIngresos.preguntas.desarrolloVentaFertilizantes.respuesta);
    this.diversificacionIngresos.get('rehabilitacionFinca')
      .setValue(formularioLineaBase.secciones.diversificacionIngresos.preguntas.rehabilitacionFinca.respuesta);
    this.diversificacionIngresos.get('brigadaPodadores')
      .setValue(formularioLineaBase.secciones.diversificacionIngresos.preguntas.brigadaPodadores.respuesta);
    this.diversificacionIngresos.get('contarExperienciaPoda')
      .setValue(formularioLineaBase.secciones.diversificacionIngresos.preguntas.brigadaPodadores.preguntas.contarExperienciaPoda.respuesta);
    this.diversificacionIngresos.get('aniosExperiencia')
      .setValue(formularioLineaBase.secciones.diversificacionIngresos.preguntas.brigadaPodadores.preguntas.contarExperienciaPoda.preguntas.aniosExperiencia.respuesta);
  }

}
