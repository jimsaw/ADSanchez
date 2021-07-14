import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioVerificacion } from 'src/app/interfaces/formularioVerificacion';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ambiental',
  templateUrl: './ambiental.component.html',
  styleUrls: ['./ambiental.component.css']
})
export class AmbientalComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  ambiental: FormGroup;

  yesNoAnswer: string[];
  estado: string[];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.ambiental = this.formBuilder.group({
      estadoPlantasFrutales: new FormControl(''),
      estadoPlantasForestales: new FormControl(''),
      estadoOtrosAmbiental: new FormControl(''),
      necesitaPlantasFrutales: new FormControl(''),
      necesitaPlantasForestales: new FormControl(''),
      necesitaOtrosAmbiental: new FormControl('')
    });
   }

  ngOnInit(): void {
    this.yesNoAnswer = environment.constantes.formularioVerificacion.yesNoAnswer;
    this.estado = environment.constantes.formularioVerificacion.estado;
  }

  onSubmit() {

  }

  get seccion(): any {
    return {
      preguntas: {
        estadoPlantasFrutales: {
          respuesta: this.ambiental.value.estadoPlantasFrutales
        },
        estadoPlantasForestales: {
          respuesta: this.ambiental.value.estadoPlantasForestales
        },
        estadoOtrosAmbiental: {
          respuesta: this.ambiental.value.estadoOtrosAmbiental
        },
        necesitaPlantasFrutales: {
          respuesta: this.ambiental.value.necesitaPlantasFrutales
        },
        necesitaPlantasForestales: {
          respuesta: this.ambiental.value.necesitaPlantasForestales
        },
        necesitaOtrosAmbiental: {
          respuesta: this.ambiental.value.necesitaOtrosAmbiental
        }
      }
    };
  }

  setValues(formularioVerificacion: FormularioVerificacion): void {
    const seccionesIncentivos = formularioVerificacion.secciones.capacitacionesBeneficioPrograma.secciones.incentivos.secciones
    this.ambiental.get('estadoPlantasFrutales')
      .setValue(seccionesIncentivos.ambiental.preguntas.estadoPlantasFrutales.respuesta);
    this.ambiental.get('estadoPlantasForestales')
      .setValue(seccionesIncentivos.ambiental.preguntas.estadoPlantasForestales.respuesta);
    this.ambiental.get('estadoOtrosAmbiental')
      .setValue(seccionesIncentivos.ambiental.preguntas.estadoOtrosAmbiental.respuesta);
    this.ambiental.get('necesitaPlantasFrutales')
      .setValue(seccionesIncentivos.ambiental.preguntas.necesitaPlantasFrutales.respuesta);
    this.ambiental.get('necesitaPlantasForestales')
      .setValue(seccionesIncentivos.ambiental.preguntas.necesitaPlantasForestales.respuesta);
    this.ambiental.get('necesitaOtrosAmbiental')
      .setValue(seccionesIncentivos.ambiental.preguntas.necesitaOtrosAmbiental.respuesta);
  }

}
