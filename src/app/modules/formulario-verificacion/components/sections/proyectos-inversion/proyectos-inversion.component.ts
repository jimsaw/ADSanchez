import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioVerificacion } from 'src/app/interfaces/formularioVerificacion';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-proyectos-inversion',
  templateUrl: './proyectos-inversion.component.html',
  styleUrls: ['./proyectos-inversion.component.css']
})
export class ProyectosInversionComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  proyectosInversion: FormGroup;

  yesNoAnswer: string[];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.proyectosInversion = this.formBuilder.group({
      necesitaPlantasCacao800801: new FormControl(''),
      necesitaComboApicola: new FormControl(''),
      necesitaPiesCriasInsumos: new FormControl(''),
      necesitaPecesInsumos: new FormControl(''),
      necesitaRiego: new FormControl(''),
      necesitaOtrosProyectosInversion: new FormControl(''),
      disponibilidadInvertirPlantasCacao800801: new FormControl(''),
      disponibilidadInvertirComboApicola: new FormControl(''),
      disponibilidadInvertirPiesCriasInsumos: new FormControl(''),
      disponibilidadInvertirPecesInsumos: new FormControl(''),
      disponibilidadInvertirRiego: new FormControl(''),
      disponibilidadInvertirOtros: new FormControl(''),
      condAdecuadasPlantasCacao800801: new FormControl(''),
      condAdecuadasComboApicola: new FormControl(''),
      condAdecuadasPiesCriasInsumos: new FormControl(''),
      condAdecuadasPecesInsumos: new FormControl(''),
      condAdecuadasRiego: new FormControl(''),
      condAdecuadasOtros: new FormControl(''),
      condEconomicasPlantasCacao800801: new FormControl(''),
      condEconomicasComboApicola: new FormControl(''),
      condEconomicasPiesCriasInsumos: new FormControl(''),
      condEconomicasPecesInsumos: new FormControl(''),
      condEconomicasRiego: new FormControl(''),
      condEconomicasOtros: new FormControl(''),
    });
   }

  ngOnInit(): void {
    this.yesNoAnswer = environment.constantes.formularioVerificacion.yesNoAnswer;
  }

  onSubmit() {

  }

  get seccion(): any {
    return {
      preguntas: {
        necesitaPlantasCacao800801: {
          respuesta: this.proyectosInversion.value.necesitaPlantasCacao800801
        },
        necesitaComboApicola: {
          respuesta: this.proyectosInversion.value.necesitaComboApicola
        },
        necesitaPiesCriasInsumos: {
          respuesta: this.proyectosInversion.value.necesitaPiesCriasInsumos
        },
        necesitaPecesInsumos: {
          respuesta: this.proyectosInversion.value.necesitaPecesInsumos
        },
        necesitaRiego: {
          respuesta: this.proyectosInversion.value.necesitaRiego
        },
        necesitaOtrosProyectosInversion: {
          respuesta: this.proyectosInversion.value.necesitaOtrosProyectosInversion
        },
        disponibilidadInvertirPlantasCacao800801: {
          respuesta: this.proyectosInversion.value.disponibilidadInvertirPlantasCacao800801
        },
        disponibilidadInvertirComboApicola: {
          respuesta: this.proyectosInversion.value.disponibilidadInvertirComboApicola
        },
        disponibilidadInvertirPiesCriasInsumos: {
          respuesta: this.proyectosInversion.value.disponibilidadInvertirPiesCriasInsumos
        },
        disponibilidadInvertirPecesInsumos: {
          respuesta: this.proyectosInversion.value.disponibilidadInvertirPecesInsumos
        },
        disponibilidadInvertirRiego: {
          respuesta: this.proyectosInversion.value.disponibilidadInvertirRiego
        },
        disponibilidadInvertirOtros: {
          respuesta: this.proyectosInversion.value.disponibilidadInvertirOtros
        },
        condAdecuadasPlantasCacao800801: {
          respuesta: this.proyectosInversion.value.condAdecuadasPlantasCacao800801
        },
        condAdecuadasComboApicola: {
          respuesta: this.proyectosInversion.value.condAdecuadasComboApicola
        },
        condAdecuadasPiesCriasInsumos: {
          respuesta: this.proyectosInversion.value.condAdecuadasPiesCriasInsumos
        },
        condAdecuadasPecesInsumos: {
          respuesta: this.proyectosInversion.value.condAdecuadasPecesInsumos
        },
        condAdecuadasRiego: {
          respuesta: this.proyectosInversion.value.condAdecuadasRiego
        },
        condAdecuadasOtros: {
          respuesta: this.proyectosInversion.value.condAdecuadasOtros
        },
        condEconomicasPlantasCacao800801: {
          respuesta: this.proyectosInversion.value.condEconomicasPlantasCacao800801
        },
        condEconomicasComboApicola: {
          respuesta: this.proyectosInversion.value.condEconomicasComboApicola
        },
        condEconomicasPiesCriasInsumos: {
          respuesta: this.proyectosInversion.value.condEconomicasPiesCriasInsumos
        },
        condEconomicasPecesInsumos: {
          respuesta: this.proyectosInversion.value.condEconomicasPecesInsumos
        },
        condEconomicasRiego: {
          respuesta: this.proyectosInversion.value.condEconomicasRiego
        },
        condEconomicasOtros: {
          respuesta: this.proyectosInversion.value.condEconomicasOtros
        }
      }
    };
  }

  setValues(formularioVerificacion: FormularioVerificacion): void {
    const seccionesIncentivos = formularioVerificacion.secciones.capacitacionesBeneficioPrograma.secciones.incentivos.secciones;
    this.proyectosInversion.get('necesitaPlantasCacao800801')
      .setValue(seccionesIncentivos.proyectosInversion.preguntas.necesitaPlantasCacao800801.respuesta);
    this.proyectosInversion.get('necesitaComboApicola')
      .setValue(seccionesIncentivos.proyectosInversion.preguntas.necesitaComboApicola.respuesta);
    this.proyectosInversion.get('necesitaPiesCriasInsumos')
      .setValue(seccionesIncentivos.proyectosInversion.preguntas.necesitaPiesCriasInsumos.respuesta);
    this.proyectosInversion.get('necesitaPecesInsumos')
      .setValue(seccionesIncentivos.proyectosInversion.preguntas.necesitaPecesInsumos.respuesta);
    this.proyectosInversion.get('necesitaRiego')
      .setValue(seccionesIncentivos.proyectosInversion.preguntas.necesitaRiego.respuesta);
    this.proyectosInversion.get('necesitaOtrosProyectosInversion')
      .setValue(seccionesIncentivos.proyectosInversion.preguntas.necesitaOtrosProyectosInversion.respuesta);
    this.proyectosInversion.get('disponibilidadInvertirPlantasCacao800801')
      .setValue(seccionesIncentivos.proyectosInversion.preguntas.disponibilidadInvertirPlantasCacao800801.respuesta);
    this.proyectosInversion.get('disponibilidadInvertirComboApicola')
      .setValue(seccionesIncentivos.proyectosInversion.preguntas.disponibilidadInvertirComboApicola.respuesta);
    this.proyectosInversion.get('disponibilidadInvertirPiesCriasInsumos')
      .setValue(seccionesIncentivos.proyectosInversion.preguntas.disponibilidadInvertirPiesCriasInsumos.respuesta);
    this.proyectosInversion.get('disponibilidadInvertirPecesInsumos')
      .setValue(seccionesIncentivos.proyectosInversion.preguntas.disponibilidadInvertirPecesInsumos.respuesta);
    this.proyectosInversion.get('disponibilidadInvertirRiego')
      .setValue(seccionesIncentivos.proyectosInversion.preguntas.disponibilidadInvertirRiego.respuesta);
    this.proyectosInversion.get('disponibilidadInvertirOtros')
      .setValue(seccionesIncentivos.proyectosInversion.preguntas.disponibilidadInvertirOtros.respuesta);
    this.proyectosInversion.get('condAdecuadasPlantasCacao800801')
      .setValue(seccionesIncentivos.proyectosInversion.preguntas.condAdecuadasPlantasCacao800801.respuesta);
    this.proyectosInversion.get('condAdecuadasComboApicola')
      .setValue(seccionesIncentivos.proyectosInversion.preguntas.condAdecuadasComboApicola.respuesta);
    this.proyectosInversion.get('condAdecuadasPiesCriasInsumos')
      .setValue(seccionesIncentivos.proyectosInversion.preguntas.condAdecuadasPiesCriasInsumos.respuesta);
    this.proyectosInversion.get('condAdecuadasPecesInsumos')
      .setValue(seccionesIncentivos.proyectosInversion.preguntas.condAdecuadasPecesInsumos.respuesta);
    this.proyectosInversion.get('condAdecuadasRiego')
      .setValue(seccionesIncentivos.proyectosInversion.preguntas.condAdecuadasRiego.respuesta);
    this.proyectosInversion.get('condAdecuadasOtros')
      .setValue(seccionesIncentivos.proyectosInversion.preguntas.condAdecuadasOtros.respuesta);
    this.proyectosInversion.get('condEconomicasPlantasCacao800801')
      .setValue(seccionesIncentivos.proyectosInversion.preguntas.condEconomicasPlantasCacao800801.respuesta);
    this.proyectosInversion.get('condEconomicasComboApicola')
      .setValue(seccionesIncentivos.proyectosInversion.preguntas.condEconomicasComboApicola.respuesta);
    this.proyectosInversion.get('condEconomicasPiesCriasInsumos')
      .setValue(seccionesIncentivos.proyectosInversion.preguntas.condEconomicasPiesCriasInsumos.respuesta);
    this.proyectosInversion.get('condEconomicasPecesInsumos')
      .setValue(seccionesIncentivos.proyectosInversion.preguntas.condEconomicasPecesInsumos.respuesta);
    this.proyectosInversion.get('condEconomicasRiego')
      .setValue(seccionesIncentivos.proyectosInversion.preguntas.condEconomicasRiego.respuesta);
    this.proyectosInversion.get('condEconomicasOtros')
      .setValue(seccionesIncentivos.proyectosInversion.preguntas.condEconomicasOtros.respuesta);
  }

}
