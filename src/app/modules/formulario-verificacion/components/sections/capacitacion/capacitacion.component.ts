import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioVerificacion } from 'src/app/interfaces/formularioVerificacion';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-capacitacion',
  templateUrl: './capacitacion.component.html',
  styleUrls: ['./capacitacion.component.css']
})
export class CapacitacionComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  capacitacion: FormGroup;

  yesNoAnswer: string[];
  utilidad: string[];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.capacitacion = this.formBuilder.group({
      utilidadCacaoFinoAromaSostenibilidadTrazabilidad: new FormControl(''),
      aplicaCacaoFinoAromaSostenibilidadTrazabilidad: new FormControl(''),
      utilidadBuenasPracticasAgricolas: new FormControl(''),
      aplicaBuenasPracticasAgricolas: new FormControl(''),
      utilidadParametrosCalidad: new FormControl(''),
      aplicaParametrosCalidad: new FormControl(''),
      utilidadBuenasPracticasSociales: new FormControl(''),
      aplicaBuenasPracticasSociales: new FormControl(''),
      utilidadBuenasPracticasAmbientales: new FormControl(''),
      aplicaBuenasPracticasAmbientales: new FormControl(''),
      utilidadElaboracionProductosOrganicos: new FormControl(''),
      aplicaElaboracionProductosOrganicos: new FormControl(''),
      utilidadReproduccionVegetativa: new FormControl(''),
      aplicaReproduccionVegetativa: new FormControl(''),
      utilidadPoda: new FormControl(''),
      aplicaPoda: new FormControl(''),
      utilidadApicultura: new FormControl(''),
      aplicaApicultura: new FormControl(''),
      utilidadPorcicultura: new FormControl(''),
      aplicaPorcicultura: new FormControl(''),
      utilidadPiscicultura: new FormControl(''),
      aplicaPiscicultura: new FormControl(''),
      utilidadRiego: new FormControl(''),
      aplicaRiego: new FormControl(''),
      utilidadAgroforesteriaDinamica: new FormControl(''),
      aplicaAgroforesteriaDinamica: new FormControl(''),
      temasAdicionalesGustariaAprender: new FormControl('')
    });
   }

  ngOnInit(): void {
    this.yesNoAnswer = environment.constantes.formularioVerificacion.yesNoAnswer;
    this.utilidad = environment.constantes.formularioVerificacion.utilidad;
  }

  onSubmit() {

  }

  get seccion(): any {
    return {
      preguntas: {
        utilidadCacaoFinoAromaSostenibilidadTrazabilidad: {
          respuesta: this.capacitacion.value.utilidadCacaoFinoAromaSostenibilidadTrazabilidad
        },
        aplicaCacaoFinoAromaSostenibilidadTrazabilidad: {
          respuesta: this.capacitacion.value.aplicaCacaoFinoAromaSostenibilidadTrazabilidad
        },
        utilidadBuenasPracticasAgricolas: {
          respuesta: this.capacitacion.value.utilidadBuenasPracticasAgricolas
        },
        aplicaBuenasPracticasAgricolas: {
          respuesta: this.capacitacion.value.aplicaBuenasPracticasAgricolas
        },
        utilidadParametrosCalidad: {
          respuesta: this.capacitacion.value.utilidadParametrosCalidad
        },
        aplicaParametrosCalidad: {
          respuesta: this.capacitacion.value.aplicaParametrosCalidad
        },
        utilidadBuenasPracticasSociales: {
          respuesta: this.capacitacion.value.utilidadBuenasPracticasSociales
        },
        aplicaBuenasPracticasSociales: {
          respuesta: this.capacitacion.value.aplicaBuenasPracticasSociales
        },
        utilidadBuenasPracticasAmbientales: {
          respuesta: this.capacitacion.value.utilidadBuenasPracticasAmbientales
        },
        aplicaBuenasPracticasAmbientales: {
          respuesta: this.capacitacion.value.aplicaBuenasPracticasAmbientales
        },
        utilidadElaboracionProductosOrganicos: {
          respuesta: this.capacitacion.value.utilidadElaboracionProductosOrganicos
        },
        aplicaElaboracionProductosOrganicos: {
          respuesta: this.capacitacion.value.aplicaElaboracionProductosOrganicos
        },
        utilidadReproduccionVegetativa: {
          respuesta: this.capacitacion.value.utilidadReproduccionVegetativa
        },
        aplicaReproduccionVegetativa: {
          respuesta: this.capacitacion.value.aplicaReproduccionVegetativa
        },
        utilidadPoda: {
          respuesta: this.capacitacion.value.utilidadPoda
        },
        aplicaPoda: {
          respuesta: this.capacitacion.value.aplicaPoda
        },
        utilidadApicultura: {
          respuesta: this.capacitacion.value.utilidadApicultura
        },
        aplicaApicultura: {
          respuesta: this.capacitacion.value.aplicaApicultura
        },
        utilidadPorcicultura: {
          respuesta: this.capacitacion.value.utilidadPorcicultura
        },
        aplicaPorcicultura: {
          respuesta: this.capacitacion.value.aplicaPorcicultura
        },
        utilidadPiscicultura: {
          respuesta: this.capacitacion.value.utilidadPiscicultura
        },
        aplicaPiscicultura: {
          respuesta: this.capacitacion.value.aplicaPiscicultura
        },
        utilidadRiego: {
          respuesta: this.capacitacion.value.utilidadRiego
        },
        aplicaRiego: {
          respuesta: this.capacitacion.value.aplicaRiego
        },
        utilidadAgroforesteriaDinamica: {
          respuesta: this.capacitacion.value.utilidadAgroforesteriaDinamica
        },
        aplicaAgroforesteriaDinamica: {
          respuesta: this.capacitacion.value.aplicaAgroforesteriaDinamica
        },
        temasAdicionalesGustariaAprender: {
          respuesta: this.capacitacion.value.temasAdicionalesGustariaAprender
        }
      }
    };
  }

  setValues(formularioVerificacion: FormularioVerificacion): void {
    const seccionesCapacitacionBeneficio = formularioVerificacion.secciones.capacitacionesBeneficioPrograma.secciones
    this.capacitacion.get('utilidadCacaoFinoAromaSostenibilidadTrazabilidad')
      .setValue(seccionesCapacitacionBeneficio.capacitacion.preguntas.utilidadCacaoFinoAromaSostenibilidadTrazabilidad.respuesta);
    this.capacitacion.get('aplicaCacaoFinoAromaSostenibilidadTrazabilidad')
      .setValue(seccionesCapacitacionBeneficio.capacitacion.preguntas.aplicaCacaoFinoAromaSostenibilidadTrazabilidad.respuesta);
    this.capacitacion.get('utilidadBuenasPracticasAgricolas')
      .setValue(seccionesCapacitacionBeneficio.capacitacion.preguntas.utilidadBuenasPracticasAgricolas.respuesta);
    this.capacitacion.get('aplicaBuenasPracticasAgricolas')
      .setValue(seccionesCapacitacionBeneficio.capacitacion.preguntas.aplicaBuenasPracticasAgricolas.respuesta);
    this.capacitacion.get('utilidadParametrosCalidad')
      .setValue(seccionesCapacitacionBeneficio.capacitacion.preguntas.utilidadParametrosCalidad.respuesta);
    this.capacitacion.get('aplicaParametrosCalidad')
      .setValue(seccionesCapacitacionBeneficio.capacitacion.preguntas.aplicaParametrosCalidad.respuesta);
    this.capacitacion.get('utilidadBuenasPracticasSociales')
      .setValue(seccionesCapacitacionBeneficio.capacitacion.preguntas.utilidadBuenasPracticasSociales.respuesta);
    this.capacitacion.get('aplicaBuenasPracticasSociales')
      .setValue(seccionesCapacitacionBeneficio.capacitacion.preguntas.aplicaBuenasPracticasSociales.respuesta);
    this.capacitacion.get('utilidadBuenasPracticasAmbientales')
      .setValue(seccionesCapacitacionBeneficio.capacitacion.preguntas.utilidadBuenasPracticasAmbientales.respuesta);
    this.capacitacion.get('aplicaBuenasPracticasAmbientales')
      .setValue(seccionesCapacitacionBeneficio.capacitacion.preguntas.aplicaBuenasPracticasAmbientales.respuesta);
    this.capacitacion.get('utilidadElaboracionProductosOrganicos')
      .setValue(seccionesCapacitacionBeneficio.capacitacion.preguntas.utilidadElaboracionProductosOrganicos.respuesta);
    this.capacitacion.get('aplicaElaboracionProductosOrganicos')
      .setValue(seccionesCapacitacionBeneficio.capacitacion.preguntas.aplicaElaboracionProductosOrganicos.respuesta);
    this.capacitacion.get('utilidadReproduccionVegetativa')
      .setValue(seccionesCapacitacionBeneficio.capacitacion.preguntas.utilidadReproduccionVegetativa.respuesta);
    this.capacitacion.get('aplicaReproduccionVegetativa')
      .setValue(seccionesCapacitacionBeneficio.capacitacion.preguntas.aplicaReproduccionVegetativa.respuesta);
    this.capacitacion.get('utilidadPoda')
      .setValue(seccionesCapacitacionBeneficio.capacitacion.preguntas.utilidadPoda.respuesta);
    this.capacitacion.get('aplicaPoda')
      .setValue(seccionesCapacitacionBeneficio.capacitacion.preguntas.aplicaPoda.respuesta);
    this.capacitacion.get('utilidadApicultura')
      .setValue(seccionesCapacitacionBeneficio.capacitacion.preguntas.utilidadApicultura.respuesta);
    this.capacitacion.get('aplicaApicultura')
      .setValue(seccionesCapacitacionBeneficio.capacitacion.preguntas.aplicaApicultura.respuesta);
    this.capacitacion.get('utilidadPorcicultura')
      .setValue(seccionesCapacitacionBeneficio.capacitacion.preguntas.utilidadPorcicultura.respuesta);
    this.capacitacion.get('aplicaPorcicultura')
      .setValue(seccionesCapacitacionBeneficio.capacitacion.preguntas.aplicaPorcicultura.respuesta);
    this.capacitacion.get('utilidadPiscicultura')
      .setValue(seccionesCapacitacionBeneficio.capacitacion.preguntas.utilidadPiscicultura.respuesta);
    this.capacitacion.get('aplicaPiscicultura')
      .setValue(seccionesCapacitacionBeneficio.capacitacion.preguntas.aplicaPiscicultura.respuesta);
    this.capacitacion.get('utilidadRiego')
      .setValue(seccionesCapacitacionBeneficio.capacitacion.preguntas.utilidadRiego.respuesta);
    this.capacitacion.get('aplicaRiego')
      .setValue(seccionesCapacitacionBeneficio.capacitacion.preguntas.aplicaRiego.respuesta);
    this.capacitacion.get('utilidadAgroforesteriaDinamica')
      .setValue(seccionesCapacitacionBeneficio.capacitacion.preguntas.utilidadAgroforesteriaDinamica.respuesta);
    this.capacitacion.get('aplicaAgroforesteriaDinamica')
      .setValue(seccionesCapacitacionBeneficio.capacitacion.preguntas.aplicaAgroforesteriaDinamica.respuesta);
    this.capacitacion.get('temasAdicionalesGustariaAprender')
      .setValue(seccionesCapacitacionBeneficio.capacitacion.preguntas.temasAdicionalesGustariaAprender.respuesta);
  }

}
