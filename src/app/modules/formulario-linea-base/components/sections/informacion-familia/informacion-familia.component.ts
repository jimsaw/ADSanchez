import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioLineaBase } from 'src/app/interfaces/formularioLineaBase';

@Component({
  selector: 'app-informacion-familia',
  templateUrl: './informacion-familia.component.html',
  styleUrls: ['./informacion-familia.component.css']
})
export class InformacionFamiliaComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  informacionFamilia: FormGroup;

  generos: string[] = [
    "MASCULINO",
    "FEMENINO"
  ]

  seguridadSocial: string[] = ["SI", "NO"];

  laboraFinca: string[] = ["SI", "NO"];

  otrosIngresos: string[] = ["SI", "NO"];

  opciones: string[] = ["SI", "NO"];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.informacionFamilia = this.formBuilder.group({
      miembros: new FormArray([
        new FormGroup({
          clasificacionMiembroFamiliar: new FormControl(''),
          edad: new FormControl(''),
          genero: new FormControl(''),
          seguridadSocial: new FormControl(''),
          nivelEduacion: new FormControl(''),
          laboraEnFinca: new FormControl(''),
          laborRealizado: new FormControl(''),
          horasAlDiaTrabaja: new FormControl(''),
          tieneOtraFuenteIngreso: new FormControl(''),
          sueldoIngresoMensual: new FormControl('')
        })
      ]),
      familiarDiscapacitado: new FormControl(''),
      esposaInvolucradaEntrevista: new FormControl(''),
      esposoIncluyeEsposaEntrevista: new FormControl(''),
      deseoIngresoAdicionalConyuge: new FormControl(''),
      deseoTrabajoMedioTiempoProyectosFuturos: new FormControl(''),
      comoCual: new FormControl(''),
      hijoInteresadoEnProyectosRehabilitacionFinca: new FormControl('')
    });
   }

  ngOnInit(): void {
    
  }

  onSubmit() {

  }

  labora(index: number) {
    const labora = this.getFormArray('miembros').controls[index].value.laboraEnFinca;
    return labora === 'SI';
  }

  deseaTrabajo() {
    const deseaTrabajo = this.informacionFamilia.get('deseoTrabajoMedioTiempoProyectosFuturos').value;
    return deseaTrabajo === 'SI';
  }

  getFormArray(key: string): FormArray {
    return this.informacionFamilia.get(key) as FormArray;
  }

  createMiembroField(): FormGroup {
    return new FormGroup({
      clasificacionMiembroFamiliar: new FormControl(''),
      edad: new FormControl(''),
      genero: new FormControl(''),
      seguridadSocial: new FormControl(''),
      nivelEduacion: new FormControl(''),
      laboraEnFinca: new FormControl(''),
      laborRealizado: new FormControl(''),
      horasAlDiaTrabaja: new FormControl(''),
      tieneOtraFuenteIngreso: new FormControl(''),
      sueldoIngresoMensual: new FormControl('')
    });
  }

  addMiembro(): void {
    this.getFormArray("miembros").push(this.createMiembroField());
  }

  deleteMiembro(index: number): void {
    this.getFormArray("miembros").removeAt(index);
  }

  miembrosToObject(): any[] {
    const questions: any[] = [];
    for (let value of this.getFormArray("miembros").controls) {
      const miembro = {
        clasificacionMiembroFamiliar: {
          respuesta: value.get("clasificacionMiembroFamiliar").value
        },
        edad: {
          respuesta: value.get("edad").value
        },
        genero: {
          respuesta: value.get("genero").value
        },
        seguridadSocial: {
          respuesta: value.get("seguridadSocial").value
        },
        nivelEduacion: {
          respuesta: value.get("nivelEduacion").value
        },
        laboraEnFinca: {
          respuesta: value.get("laboraEnFinca").value
        },
        laborRealizado: {
          respuesta: value.get("laborRealizado").value
        },
        horasAlDiaTrabaja: {
          respuesta: value.get("horasAlDiaTrabaja").value
        },
        tieneOtraFuenteIngreso: {
          respuesta: value.get("tieneOtraFuenteIngreso").value
        },
        sueldoIngresoMensual: {
          respuesta: value.get("sueldoIngresoMensual").value
        }
      };
      questions.push(miembro);
    }
    return questions;
  }

  get seccion(): any {
    return {
      preguntas: {
        miembros: {
          arreglo: this.miembrosToObject()
        },
        familiarDiscapacitado: {
          respuesta: this.informacionFamilia.value.familiarDiscapacitado
        },
        esposaInvolucradaEntrevista: {
          respuesta: this.informacionFamilia.value.esposaInvolucradaEntrevista
        },
        esposoIncluyeEsposaEntrevista: {
          respuesta: this.informacionFamilia.value.esposoIncluyeEsposaEntrevista
        },
        deseoIngresoAdicionalConyuge: {
          respuesta: this.informacionFamilia.value.deseoIngresoAdicionalConyuge
        },
        deseoTrabajoMedioTiempoProyectosFuturos: {
          respuesta: this.informacionFamilia.value.deseoTrabajoMedioTiempoProyectosFuturos,
          preguntas: {
            comoCual: {
              respuesta: this.informacionFamilia.value.comoCual
            }
          }
        },
        hijoInteresadoEnProyectosRehabilitacionFinca: {
          respuesta: this.informacionFamilia.value.hijoInteresadoEnProyectosRehabilitacionFinca
        }
      }
    };
  }

  setMiembros(formularioLineaBase: FormularioLineaBase): void {
    formularioLineaBase.secciones.informacionFamilia.preguntas.miembros.arreglo.forEach((value, index) => {
      this.addMiembro();
      this.getFormArray("miembros").controls[index].get("clasificacionMiembroFamiliar").setValue(value["clasificacionMiembroFamiliar"]["respuesta"]);
      this.getFormArray("miembros").controls[index].get("edad").setValue(value["edad"]["respuesta"]);
      this.getFormArray("miembros").controls[index].get("genero").setValue(value["genero"]["respuesta"]);
      this.getFormArray("miembros").controls[index].get("seguridadSocial").setValue(value["seguridadSocial"]["respuesta"]);
      this.getFormArray("miembros").controls[index].get("nivelEduacion").setValue(value["nivelEduacion"]["respuesta"]);
      this.getFormArray("miembros").controls[index].get("laboraEnFinca").setValue(value["laboraEnFinca"]["respuesta"]);
      this.getFormArray("miembros").controls[index].get("laborRealizado").setValue(value["laborRealizado"]["respuesta"]);
      this.getFormArray("miembros").controls[index].get("horasAlDiaTrabaja").setValue(value["horasAlDiaTrabaja"]["respuesta"]);
      this.getFormArray("miembros").controls[index].get("tieneOtraFuenteIngreso").setValue(value["tieneOtraFuenteIngreso"]["respuesta"]);
      this.getFormArray("miembros").controls[index].get("sueldoIngresoMensual").setValue(value["sueldoIngresoMensual"]["respuesta"]);
    });
  }

  setValues(formularioLineaBase: FormularioLineaBase): void {
    this.setMiembros(formularioLineaBase);
    this.informacionFamilia.get('familiarDiscapacitado')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.familiarDiscapacitado.respuesta);
    this.informacionFamilia.get('esposaInvolucradaEntrevista')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.esposaInvolucradaEntrevista.respuesta);
    this.informacionFamilia.get('esposoIncluyeEsposaEntrevista')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.esposoIncluyeEsposaEntrevista.respuesta);
    this.informacionFamilia.get('deseoIngresoAdicionalConyuge')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.deseoIngresoAdicionalConyuge.respuesta);
    this.informacionFamilia.get('deseoTrabajoMedioTiempoProyectosFuturos')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.deseoTrabajoMedioTiempoProyectosFuturos.respuesta);
    this.informacionFamilia.get('comoCual')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.deseoTrabajoMedioTiempoProyectosFuturos.preguntas.comoCual.respuesta);
    this.informacionFamilia.get('hijoInteresadoEnProyectosRehabilitacionFinca')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.hijoInteresadoEnProyectosRehabilitacionFinca.respuesta);
  }

}
