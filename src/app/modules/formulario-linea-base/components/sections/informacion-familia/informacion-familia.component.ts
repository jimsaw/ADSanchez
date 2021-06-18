import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
      miembro1ClasifiacionMiembroFamiliar: new FormControl(''),
      miembro1Edad: new FormControl(''),
      miembro1Genero: new FormControl(''),
      miembro1SeguridadSocial: new FormControl(''),
      miembro1NivelEduacion: new FormControl(''),
      miembro1LaboraEnFinca: new FormControl(''),
      miembro1LaborRealizado: new FormControl(''),
      miembro1HorasAlDiaTrabaja: new FormControl(''),
      miembro1tieneOtraFuenteIngreso: new FormControl(''),
      miembro1sueldoIngresoMensual: new FormControl(''),
      miembro2ClasifiacionMiembroFamiliar: new FormControl(''),
      miembro2Edad: new FormControl(''),
      miembro2Genero: new FormControl(''),
      miembro2SeguridadSocial: new FormControl(''),
      miembro2NivelEduacion: new FormControl(''),
      miembro2LaboraEnFinca: new FormControl(''),
      miembro2LaborRealizado: new FormControl(''),
      miembro2HorasAlDiaTrabaja: new FormControl(''),
      miembro2tieneOtraFuenteIngreso: new FormControl(''),
      miembro2sueldoIngresoMensual: new FormControl(''),
      miembro3ClasifiacionMiembroFamiliar: new FormControl(''),
      miembro3Edad: new FormControl(''),
      miembro3Genero: new FormControl(''),
      miembro3SeguridadSocial: new FormControl(''),
      miembro3NivelEduacion: new FormControl(''),
      miembro3LaboraEnFinca: new FormControl(''),
      miembro3LaborRealizado: new FormControl(''),
      miembro3HorasAlDiaTrabaja: new FormControl(''),
      miembro3tieneOtraFuenteIngreso: new FormControl(''),
      miembro3sueldoIngresoMensual: new FormControl(''),
      miembro4ClasifiacionMiembroFamiliar: new FormControl(''),
      miembro4Edad: new FormControl(''),
      miembro4Genero: new FormControl(''),
      miembro4SeguridadSocial: new FormControl(''),
      miembro4NivelEduacion: new FormControl(''),
      miembro4LaboraEnFinca: new FormControl(''),
      miembro4LaborRealizado: new FormControl(''),
      miembro4HorasAlDiaTrabaja: new FormControl(''),
      miembro4tieneOtraFuenteIngreso: new FormControl(''),
      miembro4sueldoIngresoMensual: new FormControl(''),
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

  m1labora() {
    const labora = this.informacionFamilia.get('miembro1LaboraEnFinca').value;
    return labora === 'SI';
  }

  m2labora() {
    const labora = this.informacionFamilia.get('miembro2LaboraEnFinca').value;
    return labora === 'SI';
  }

  m3labora() {
    const labora = this.informacionFamilia.get('miembro3LaboraEnFinca').value;
    return labora === 'SI';
  }

  m4labora() {
    const labora = this.informacionFamilia.get('miembro4LaboraEnFinca').value;
    return labora === 'SI';
  }

  deseaTrabajo() {
    const deseaTrabajo = this.informacionFamilia.get('deseoTrabajoMedioTiempoProyectosFuturos').value;
    return deseaTrabajo === 'SI';
  }

  get seccion(): any {
    return {
      preguntas: {
        miembro1ClasifiacionMiembroFamiliar: {
          respuesta: this.informacionFamilia.value.miembro1ClasifiacionMiembroFamiliar
        },
        miembro1Edad: {
          respuesta: this.informacionFamilia.value.miembro1Edad
        },
        miembro1Genero: {
          respuesta: this.informacionFamilia.value.miembro1Genero
        },
        miembro1SeguridadSocial: {
          respuesta: this.informacionFamilia.value.miembro1SeguridadSocial
        },
        miembro1NivelEduacion: {
          respuesta: this.informacionFamilia.value.miembro1NivelEduacion
        },
        miembro1LaboraEnFinca: {
          respuesta: this.informacionFamilia.value.miembro1LaboraEnFinca
        },
        miembro1LaborRealizado: {
          respuesta: this.informacionFamilia.value.miembro1LaborRealizado
        },
        miembro1HorasAlDiaTrabaja: {
          respuesta: this.informacionFamilia.value.miembro1HorasAlDiaTrabaja
        },
        miembro1tieneOtraFuenteIngreso: {
          respuesta: this.informacionFamilia.value.miembro1tieneOtraFuenteIngreso
        },
        miembro1sueldoIngresoMensual: {
          respuesta: this.informacionFamilia.value.miembro1sueldoIngresoMensual
        },
        miembro2ClasifiacionMiembroFamiliar: {
          respuesta: this.informacionFamilia.value.miembro2ClasifiacionMiembroFamiliar
        },
        miembro2Edad: {
          respuesta: this.informacionFamilia.value.miembro2Edad
        },
        miembro2Genero: {
          respuesta: this.informacionFamilia.value.miembro2Genero
        },
        miembro2SeguridadSocial: {
          respuesta: this.informacionFamilia.value.miembro2SeguridadSocial
        },
        miembro2NivelEduacion: {
          respuesta: this.informacionFamilia.value.miembro2NivelEduacion
        },
        miembro2LaboraEnFinca: {
          respuesta: this.informacionFamilia.value.miembro2LaboraEnFinca
        },
        miembro2LaborRealizado: {
          respuesta: this.informacionFamilia.value.miembro2LaborRealizado
        },
        miembro2HorasAlDiaTrabaja: {
          respuesta: this.informacionFamilia.value.miembro2HorasAlDiaTrabaja
        },
        miembro2tieneOtraFuenteIngreso: {
          respuesta: this.informacionFamilia.value.miembro2tieneOtraFuenteIngreso
        },
        miembro2sueldoIngresoMensual: {
          respuesta: this.informacionFamilia.value.miembro2sueldoIngresoMensual
        },
        miembro3ClasifiacionMiembroFamiliar: {
          respuesta: this.informacionFamilia.value.miembro3ClasifiacionMiembroFamiliar
        },
        miembro3Edad: {
          respuesta: this.informacionFamilia.value.miembro3Edad
        },
        miembro3Genero: {
          respuesta: this.informacionFamilia.value.miembro3Genero
        },
        miembro3SeguridadSocial: {
          respuesta: this.informacionFamilia.value.miembro3SeguridadSocial
        },
        miembro3NivelEduacion: {
          respuesta: this.informacionFamilia.value.miembro3NivelEduacion
        },
        miembro3LaboraEnFinca: {
          respuesta: this.informacionFamilia.value.miembro3LaboraEnFinca
        },
        miembro3LaborRealizado: {
          respuesta: this.informacionFamilia.value.miembro3LaborRealizado
        },
        miembro3HorasAlDiaTrabaja: {
          respuesta: this.informacionFamilia.value.miembro3HorasAlDiaTrabaja
        },
        miembro3tieneOtraFuenteIngreso: {
          respuesta: this.informacionFamilia.value.miembro3tieneOtraFuenteIngreso
        },
        miembro3sueldoIngresoMensual: {
          respuesta: this.informacionFamilia.value.miembro3sueldoIngresoMensual
        },
        miembro4ClasifiacionMiembroFamiliar: {
          respuesta: this.informacionFamilia.value.miembro4ClasifiacionMiembroFamiliar
        },
        miembro4Edad: {
          respuesta: this.informacionFamilia.value.miembro4Edad
        },
        miembro4Genero: {
          respuesta: this.informacionFamilia.value.miembro4Genero
        },
        miembro4SeguridadSocial: {
          respuesta: this.informacionFamilia.value.miembro4SeguridadSocial
        },
        miembro4NivelEduacion: {
          respuesta: this.informacionFamilia.value.miembro4NivelEduacion
        },
        miembro4LaboraEnFinca: {
          respuesta: this.informacionFamilia.value.miembro4LaboraEnFinca
        },
        miembro4LaborRealizado: {
          respuesta: this.informacionFamilia.value.miembro4LaborRealizado
        },
        miembro4HorasAlDiaTrabaja: {
          respuesta: this.informacionFamilia.value.miembro4HorasAlDiaTrabaja
        },
        miembro4tieneOtraFuenteIngreso: {
          respuesta: this.informacionFamilia.value.miembro4tieneOtraFuenteIngreso
        },
        miembro4sueldoIngresoMensual: {
          respuesta: this.informacionFamilia.value.miembro4sueldoIngresoMensual
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

  setValues(formularioLineaBase: FormularioLineaBase): void {
    this.informacionFamilia.get('miembro1ClasifiacionMiembroFamiliar')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.miembro1ClasifiacionMiembroFamiliar.respuesta);
    this.informacionFamilia.get('miembro1Edad')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.miembro1Edad.respuesta);
    this.informacionFamilia.get('miembro1Genero')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.miembro1Genero.respuesta);
    this.informacionFamilia.get('miembro1SeguridadSocial')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.miembro1SeguridadSocial.respuesta);
    this.informacionFamilia.get('miembro1NivelEduacion')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.miembro1NivelEduacion.respuesta);
    this.informacionFamilia.get('miembro1LaboraEnFinca')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.miembro1LaboraEnFinca.respuesta);
    this.informacionFamilia.get('miembro1LaborRealizado')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.miembro1LaborRealizado.respuesta);
    this.informacionFamilia.get('miembro1HorasAlDiaTrabaja')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.miembro1HorasAlDiaTrabaja.respuesta);
    this.informacionFamilia.get('miembro1tieneOtraFuenteIngreso')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.miembro1tieneOtraFuenteIngreso.respuesta);
    this.informacionFamilia.get('miembro1sueldoIngresoMensual')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.miembro1sueldoIngresoMensual.respuesta);
    this.informacionFamilia.get('miembro2ClasifiacionMiembroFamiliar')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.miembro2ClasifiacionMiembroFamiliar.respuesta);
    this.informacionFamilia.get('miembro2Edad')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.miembro2Edad.respuesta);
    this.informacionFamilia.get('miembro2Genero')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.miembro2Genero.respuesta);
    this.informacionFamilia.get('miembro2SeguridadSocial')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.miembro2SeguridadSocial.respuesta);
    this.informacionFamilia.get('miembro2NivelEduacion')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.miembro2NivelEduacion.respuesta);
    this.informacionFamilia.get('miembro2LaboraEnFinca')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.miembro2LaboraEnFinca.respuesta);
    this.informacionFamilia.get('miembro2LaborRealizado')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.miembro2LaborRealizado.respuesta);
    this.informacionFamilia.get('miembro2HorasAlDiaTrabaja')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.miembro2HorasAlDiaTrabaja.respuesta);
    this.informacionFamilia.get('miembro2tieneOtraFuenteIngreso')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.miembro2tieneOtraFuenteIngreso.respuesta);
    this.informacionFamilia.get('miembro2sueldoIngresoMensual')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.miembro2sueldoIngresoMensual.respuesta);
    this.informacionFamilia.get('miembro3ClasifiacionMiembroFamiliar')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.miembro3ClasifiacionMiembroFamiliar.respuesta);
    this.informacionFamilia.get('miembro3Edad')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.miembro3Edad.respuesta);
    this.informacionFamilia.get('miembro3Genero')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.miembro3Genero.respuesta);
    this.informacionFamilia.get('miembro3SeguridadSocial')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.miembro3SeguridadSocial.respuesta);
    this.informacionFamilia.get('miembro3NivelEduacion')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.miembro3NivelEduacion.respuesta);
    this.informacionFamilia.get('miembro3LaboraEnFinca')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.miembro3LaboraEnFinca.respuesta);
    this.informacionFamilia.get('miembro3LaborRealizado')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.miembro3LaborRealizado.respuesta);
    this.informacionFamilia.get('miembro3HorasAlDiaTrabaja')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.miembro3HorasAlDiaTrabaja.respuesta);
    this.informacionFamilia.get('miembro3tieneOtraFuenteIngreso')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.miembro3tieneOtraFuenteIngreso.respuesta);
    this.informacionFamilia.get('miembro3sueldoIngresoMensual')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.miembro3sueldoIngresoMensual.respuesta);
    this.informacionFamilia.get('miembro4ClasifiacionMiembroFamiliar')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.miembro4ClasifiacionMiembroFamiliar.respuesta);
    this.informacionFamilia.get('miembro4Edad')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.miembro4Edad.respuesta);
    this.informacionFamilia.get('miembro4Genero')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.miembro4Genero.respuesta);
    this.informacionFamilia.get('miembro4SeguridadSocial')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.miembro4SeguridadSocial.respuesta);
    this.informacionFamilia.get('miembro4NivelEduacion')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.miembro4NivelEduacion.respuesta);
    this.informacionFamilia.get('miembro4LaboraEnFinca')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.miembro4LaboraEnFinca.respuesta);
    this.informacionFamilia.get('miembro4LaborRealizado')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.miembro4LaborRealizado.respuesta);
    this.informacionFamilia.get('miembro4HorasAlDiaTrabaja')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.miembro4HorasAlDiaTrabaja.respuesta);
    this.informacionFamilia.get('miembro4tieneOtraFuenteIngreso')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.miembro4tieneOtraFuenteIngreso.respuesta);
    this.informacionFamilia.get('miembro4sueldoIngresoMensual')
      .setValue(formularioLineaBase.secciones.informacionFamilia.preguntas.miembro4sueldoIngresoMensual.respuesta);
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
