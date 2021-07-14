import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioVerificacion } from 'src/app/interfaces/formularioVerificacion';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-maquinaria-agricola',
  templateUrl: './maquinaria-agricola.component.html',
  styleUrls: ['./maquinaria-agricola.component.css']
})
export class MaquinariaAgricolaComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  maquinariaAgricola: FormGroup;

  yesNoAnswer: string[];
  estado: string[];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.maquinariaAgricola = this.formBuilder.group({
      estadoMotoguadania: new FormControl(''),
      estadoMotosierra: new FormControl(''),
      estadoPodadoraDeAltura: new FormControl(''),
      estadoBombaRiego: new FormControl(''),
      estadoBombaAMotor: new FormControl(''),
      estadoOtrosMaquinariaAgricola: new FormControl(''),
      necesitaMotoguadania: new FormControl(''),
      necesitaMotosierra: new FormControl(''),
      necesitaPodadoraDeAltura: new FormControl(''),
      necesitaBombaRiego: new FormControl(''),
      necesitaBombaAMotor: new FormControl(''),
      necesitaOtrosMaquinariaAgricola: new FormControl('')
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
        estadoMotoguadania: {
          respuesta: this.maquinariaAgricola.value.estadoMotoguadania
        },
        estadoMotosierra: {
          respuesta: this.maquinariaAgricola.value.estadoMotosierra
        },
        estadoPodadoraDeAltura: {
          respuesta: this.maquinariaAgricola.value.estadoPodadoraDeAltura
        },
        estadoBombaRiego: {
          respuesta: this.maquinariaAgricola.value.estadoBombaRiego
        },
        estadoBombaAMotor: {
          respuesta: this.maquinariaAgricola.value.estadoBombaAMotor
        },
        estadoOtrosMaquinariaAgricola: {
          respuesta: this.maquinariaAgricola.value.estadoOtrosMaquinariaAgricola
        },
        necesitaMotoguadania: {
          respuesta: this.maquinariaAgricola.value.necesitaMotoguadania
        },
        necesitaMotosierra: {
          respuesta: this.maquinariaAgricola.value.necesitaMotosierra
        },
        necesitaPodadoraDeAltura: {
          respuesta: this.maquinariaAgricola.value.necesitaPodadoraDeAltura
        },
        necesitaBombaRiego: {
          respuesta: this.maquinariaAgricola.value.necesitaBombaRiego
        },
        necesitaBombaAMotor: {
          respuesta: this.maquinariaAgricola.value.necesitaBombaAMotor
        },
        necesitaOtrosMaquinariaAgricola: {
          respuesta: this.maquinariaAgricola.value.necesitaOtrosMaquinariaAgricola
        }
      }
    };
  }

  setValues(formularioVerificacion: FormularioVerificacion): void {
    const seccionesIncentivos = formularioVerificacion.secciones.capacitacionesBeneficioPrograma.secciones.incentivos.secciones;
    this.maquinariaAgricola.get('estadoMotoguadania')
      .setValue(seccionesIncentivos.maquinariaAgricola.preguntas.estadoMotoguadania.respuesta);
    this.maquinariaAgricola.get('estadoMotosierra')
      .setValue(seccionesIncentivos.maquinariaAgricola.preguntas.estadoMotosierra.respuesta);
    this.maquinariaAgricola.get('estadoPodadoraDeAltura')
      .setValue(seccionesIncentivos.maquinariaAgricola.preguntas.estadoPodadoraDeAltura.respuesta);
    this.maquinariaAgricola.get('estadoBombaRiego')
      .setValue(seccionesIncentivos.maquinariaAgricola.preguntas.estadoBombaRiego.respuesta);
    this.maquinariaAgricola.get('estadoBombaAMotor')
      .setValue(seccionesIncentivos.maquinariaAgricola.preguntas.estadoBombaAMotor.respuesta);
    this.maquinariaAgricola.get('estadoOtrosMaquinariaAgricola')
      .setValue(seccionesIncentivos.maquinariaAgricola.preguntas.estadoOtrosMaquinariaAgricola.respuesta);
    this.maquinariaAgricola.get('necesitaMotoguadania')
      .setValue(seccionesIncentivos.maquinariaAgricola.preguntas.necesitaMotoguadania.respuesta);
    this.maquinariaAgricola.get('necesitaMotosierra')
      .setValue(seccionesIncentivos.maquinariaAgricola.preguntas.necesitaMotosierra.respuesta);
    this.maquinariaAgricola.get('necesitaPodadoraDeAltura')
      .setValue(seccionesIncentivos.maquinariaAgricola.preguntas.necesitaPodadoraDeAltura.respuesta);
    this.maquinariaAgricola.get('necesitaBombaRiego')
      .setValue(seccionesIncentivos.maquinariaAgricola.preguntas.necesitaBombaRiego.respuesta);
    this.maquinariaAgricola.get('necesitaBombaAMotor')
      .setValue(seccionesIncentivos.maquinariaAgricola.preguntas.necesitaBombaAMotor.respuesta);
    this.maquinariaAgricola.get('necesitaOtrosMaquinariaAgricola')
      .setValue(seccionesIncentivos.maquinariaAgricola.preguntas.necesitaOtrosMaquinariaAgricola.respuesta);
  }

}
