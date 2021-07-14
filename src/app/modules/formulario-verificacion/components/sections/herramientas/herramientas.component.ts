import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioVerificacion } from 'src/app/interfaces/formularioVerificacion';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-herramientas',
  templateUrl: './herramientas.component.html',
  styleUrls: ['./herramientas.component.css']
})
export class HerramientasComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  herramientas: FormGroup;

  yesNoAnswer: string[];
  estado: string[];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.herramientas = this.formBuilder.group({
      estadoTijeras: new FormControl(''),
      estadoSerruchos: new FormControl(''),
      estadoMachetes: new FormControl(''),
      estadoBaldes: new FormControl(''),
      estadoTanques: new FormControl(''),
      estadoPalas: new FormControl(''),
      estadoEPP: new FormControl(''),
      estadoKitPoda: new FormControl(''),
      estadoKitVivero: new FormControl(''),
      estadoOtrosHerramientas: new FormControl(''),
      necesitaTijeras: new FormControl(''),
      necesitaSerruchos: new FormControl(''),
      necesitaMachetes: new FormControl(''),
      necesitaBaldes: new FormControl(''),
      necesitaTanques: new FormControl(''),
      necesitaPalas: new FormControl(''),
      necesitaEPP: new FormControl(''),
      necesitaKitPoda: new FormControl(''),
      necesitaKitVivero: new FormControl(''),
      necesitaOtrosHerramientas: new FormControl('')
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
        estadoTijeras: {
          respuesta: this.herramientas.value.estadoTijeras
        },
        estadoSerruchos: {
          respuesta: this.herramientas.value.estadoSerruchos
        },
        estadoMachetes: {
          respuesta: this.herramientas.value.estadoMachetes
        },
        estadoBaldes: {
          respuesta: this.herramientas.value.estadoBaldes
        },
        estadoTanques: {
          respuesta: this.herramientas.value.estadoTanques
        },
        estadoPalas: {
          respuesta: this.herramientas.value.estadoPalas
        },
        estadoEPP: {
          respuesta: this.herramientas.value.estadoEPP
        },
        estadoKitPoda: {
          respuesta: this.herramientas.value.estadoKitPoda
        },
        estadoKitVivero: {
          respuesta: this.herramientas.value.estadoKitVivero
        },
        estadoOtrosHerramientas: {
          respuesta: this.herramientas.value.estadoOtrosHerramientas
        },
        necesitaTijeras: {
          respuesta: this.herramientas.value.necesitaTijeras
        },
        necesitaSerruchos: {
          respuesta: this.herramientas.value.necesitaSerruchos
        },
        necesitaMachetes: {
          respuesta: this.herramientas.value.necesitaMachetes
        },
        necesitaBaldes: {
          respuesta: this.herramientas.value.necesitaBaldes
        },
        necesitaTanques: {
          respuesta: this.herramientas.value.necesitaTanques
        },
        necesitaPalas: {
          respuesta: this.herramientas.value.necesitaPalas
        },
        necesitaEPP: {
          respuesta: this.herramientas.value.necesitaEPP
        },
        necesitaKitPoda: {
          respuesta: this.herramientas.value.necesitaKitPoda
        },
        necesitaKitVivero: {
          respuesta: this.herramientas.value.necesitaKitVivero
        },
        necesitaOtrosHerramientas: {
          respuesta: this.herramientas.value.necesitaOtrosHerramientas
        }
      }
    };
  }

  setValues(formularioVerificacion: FormularioVerificacion): void {
    const seccionesIncentivos = formularioVerificacion.secciones.capacitacionesBeneficioPrograma.secciones.incentivos.secciones;
    this.herramientas.get('estadoTijeras')
      .setValue(seccionesIncentivos.herramientas.preguntas.estadoTijeras.respuesta);
    this.herramientas.get('estadoSerruchos')
      .setValue(seccionesIncentivos.herramientas.preguntas.estadoSerruchos.respuesta);
    this.herramientas.get('estadoMachetes')
      .setValue(seccionesIncentivos.herramientas.preguntas.estadoMachetes.respuesta);
    this.herramientas.get('estadoBaldes')
      .setValue(seccionesIncentivos.herramientas.preguntas.estadoBaldes.respuesta);
    this.herramientas.get('estadoTanques')
      .setValue(seccionesIncentivos.herramientas.preguntas.estadoTanques.respuesta);
    this.herramientas.get('estadoPalas')
      .setValue(seccionesIncentivos.herramientas.preguntas.estadoPalas.respuesta);
    this.herramientas.get('estadoEPP')
      .setValue(seccionesIncentivos.herramientas.preguntas.estadoEPP.respuesta);
    this.herramientas.get('estadoKitPoda')
      .setValue(seccionesIncentivos.herramientas.preguntas.estadoKitPoda.respuesta);
    this.herramientas.get('estadoKitVivero')
      .setValue(seccionesIncentivos.herramientas.preguntas.estadoKitVivero.respuesta);
    this.herramientas.get('estadoOtrosHerramientas')
      .setValue(seccionesIncentivos.herramientas.preguntas.estadoOtrosHerramientas.respuesta);
    this.herramientas.get('necesitaTijeras')
      .setValue(seccionesIncentivos.herramientas.preguntas.necesitaTijeras.respuesta);
    this.herramientas.get('necesitaSerruchos')
      .setValue(seccionesIncentivos.herramientas.preguntas.necesitaSerruchos.respuesta);
    this.herramientas.get('necesitaMachetes')
      .setValue(seccionesIncentivos.herramientas.preguntas.necesitaMachetes.respuesta);
    this.herramientas.get('necesitaBaldes')
      .setValue(seccionesIncentivos.herramientas.preguntas.necesitaBaldes.respuesta);
    this.herramientas.get('necesitaTanques')
      .setValue(seccionesIncentivos.herramientas.preguntas.necesitaTanques.respuesta);
    this.herramientas.get('necesitaPalas')
      .setValue(seccionesIncentivos.herramientas.preguntas.necesitaPalas.respuesta);
    this.herramientas.get('necesitaEPP')
      .setValue(seccionesIncentivos.herramientas.preguntas.necesitaEPP.respuesta);
    this.herramientas.get('necesitaKitPoda')
      .setValue(seccionesIncentivos.herramientas.preguntas.necesitaKitPoda.respuesta);
    this.herramientas.get('necesitaKitVivero')
      .setValue(seccionesIncentivos.herramientas.preguntas.necesitaKitVivero.respuesta);
    this.herramientas.get('necesitaOtrosHerramientas')
      .setValue(seccionesIncentivos.herramientas.preguntas.necesitaOtrosHerramientas.respuesta);
  }

}
