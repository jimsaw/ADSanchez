import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioLineaBase } from 'src/app/interfaces/formularioLineaBase';

@Component({
  selector: 'app-origen-plantas',
  templateUrl: './origen-plantas.component.html',
  styleUrls: ['./origen-plantas.component.css']
})
export class OrigenPlantasComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  origenPlantas: FormGroup;

  encargadosPropagacion: string[] = [
    "PRODUCTOR",
    "FAMILIAR",
    "ASESOR EXTERNO",
    "OTRO"
  ]

  conocimientos: string[] = [
    "TÉCNICO",
    "EMPÍRICO"
  ]

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.origenPlantas = this.formBuilder.group({
      nombreVivero: new FormControl(''),
      ubicacionVivero: new FormControl(''),
      encargadoPropagacion: new FormControl(''),
      otroEncargadoPropagacion: new FormControl(''),
      tipoConocimiento: new FormControl(''),
      entidadDonacion: new FormControl(''),
      cantidadPlantasRecibidas: new FormControl('')
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  otroEncargado() {
    const otroEncargado = this.origenPlantas.get('encargadoPropagacion').value;
    return otroEncargado === 'OTRO';
  }

  get seccion(): any {
    return {
      preguntas: {
        nombreVivero: {
          respuesta: this.origenPlantas.value.nombreVivero
        },
        ubicacionVivero: {
          respuesta: this.origenPlantas.value.ubicacionVivero
        },
        encargadoPropagacion: {
          respuesta: this.origenPlantas.value.encargadoPropagacion,
          preguntas: {
            otroEncargadoPropagacion: {
              respuesta: this.origenPlantas.value.otroEncargadoPropagacion,
            }
          }
        },
        tipoConocimiento: {
          respuesta: this.origenPlantas.value.tipoConocimiento
        },
        entidadDonacion: {
          respuesta: this.origenPlantas.value.entidadDonacion
        },
        cantidadPlantasRecibidas: {
          respuesta: this.origenPlantas.value.cantidadPlantasRecibidas
        }
      }
    };
  }

  setValues(formularioLineaBase: FormularioLineaBase): void {
    this.origenPlantas.get('nombreVivero')
      .setValue(formularioLineaBase.secciones.origenPlantas.preguntas.nombreVivero.respuesta);
    this.origenPlantas.get('ubicacionVivero')
      .setValue(formularioLineaBase.secciones.origenPlantas.preguntas.ubicacionVivero.respuesta);
    this.origenPlantas.get('encargadoPropagacion')
      .setValue(formularioLineaBase.secciones.origenPlantas.preguntas.encargadoPropagacion.respuesta);
    this.origenPlantas.get('otroEncargadoPropagacion')
      .setValue(formularioLineaBase.secciones.origenPlantas.preguntas.encargadoPropagacion.preguntas.otroEncargadoPropagacion.respuesta);
    this.origenPlantas.get('tipoConocimiento')
      .setValue(formularioLineaBase.secciones.origenPlantas.preguntas.tipoConocimiento.respuesta);
    this.origenPlantas.get('entidadDonacion')
      .setValue(formularioLineaBase.secciones.origenPlantas.preguntas.entidadDonacion.respuesta);
    this.origenPlantas.get('cantidadPlantasRecibidas')
      .setValue(formularioLineaBase.secciones.origenPlantas.preguntas.cantidadPlantasRecibidas.respuesta);
  }

}
