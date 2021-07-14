import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioVerificacion } from 'src/app/interfaces/formularioVerificacion';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-calidad-post-cosecha',
  templateUrl: './calidad-post-cosecha.component.html',
  styleUrls: ['./calidad-post-cosecha.component.css']
})
export class CalidadPostCosechaComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  calidadPostCosecha: FormGroup;

  yesNoAnswer: string[];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.calidadPostCosecha = this.formBuilder.group({
      necesitaCajonFermentacion: new FormControl(''),
      necesitaMarquesinas: new FormControl(''),
      necesitaTendales: new FormControl(''),
      necesitaSecadoras: new FormControl(''),
      necesitaOtrosCalidadPostCosecha: new FormControl(''),
      disponibilidadInvertirCajonFermentacion: new FormControl(''),
      disponibilidadInvertirMarquesinas: new FormControl(''),
      disponibilidadInvertirTendales: new FormControl(''),
      disponibilidadInvertirSecadoras: new FormControl(''),
      disponibilidadInvertirOtrosCalidadPostCosecha: new FormControl(''),
      condAdecuadasFermentacion: new FormControl(''),
      condAdecuadasMarquesinas: new FormControl(''),
      condAdecuadasTendales: new FormControl(''),
      condAdecuadasSecadoras: new FormControl(''),
      condAdecuadasOtrosCalidadPostCosecha: new FormControl(''),
      condEconomicasFermentacion: new FormControl(''),
      condEconomicasMarquesinas: new FormControl(''),
      condEconomicasTendales: new FormControl(''),
      condEconomicasSecadoras: new FormControl(''),
      condEconomicasOtrosCalidadPostCosecha: new FormControl('')
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
        necesitaCajonFermentacion: {
          respuesta: this.calidadPostCosecha.value.necesitaCajonFermentacion
        },
        necesitaMarquesinas: {
          respuesta: this.calidadPostCosecha.value.necesitaMarquesinas
        },
        necesitaTendales: {
          respuesta: this.calidadPostCosecha.value.necesitaTendales
        },
        necesitaSecadoras: {
          respuesta: this.calidadPostCosecha.value.necesitaSecadoras
        },
        necesitaOtrosCalidadPostCosecha: {
          respuesta: this.calidadPostCosecha.value.necesitaOtrosCalidadPostCosecha
        },
        disponibilidadInvertirCajonFermentacion: {
          respuesta: this.calidadPostCosecha.value.disponibilidadInvertirCajonFermentacion
        },
        disponibilidadInvertirMarquesinas: {
          respuesta: this.calidadPostCosecha.value.disponibilidadInvertirMarquesinas
        },
        disponibilidadInvertirTendales: {
          respuesta: this.calidadPostCosecha.value.disponibilidadInvertirTendales
        },
        disponibilidadInvertirSecadoras: {
          respuesta: this.calidadPostCosecha.value.disponibilidadInvertirSecadoras
        },
        disponibilidadInvertirOtrosCalidadPostCosecha: {
          respuesta: this.calidadPostCosecha.value.disponibilidadInvertirOtrosCalidadPostCosecha
        },
        condAdecuadasFermentacion: {
          respuesta: this.calidadPostCosecha.value.condAdecuadasFermentacion
        },
        condAdecuadasMarquesinas: {
          respuesta: this.calidadPostCosecha.value.condAdecuadasMarquesinas
        },
        condAdecuadasTendales: {
          respuesta: this.calidadPostCosecha.value.condAdecuadasTendales
        },
        condAdecuadasSecadoras: {
          respuesta: this.calidadPostCosecha.value.condAdecuadasSecadoras
        },
        condAdecuadasOtrosCalidadPostCosecha: {
          respuesta: this.calidadPostCosecha.value.condAdecuadasOtrosCalidadPostCosecha
        },
        condEconomicasFermentacion: {
          respuesta: this.calidadPostCosecha.value.condEconomicasFermentacion
        },
        condEconomicasMarquesinas: {
          respuesta: this.calidadPostCosecha.value.condEconomicasMarquesinas
        },
        condEconomicasTendales: {
          respuesta: this.calidadPostCosecha.value.condEconomicasTendales
        },
        condEconomicasSecadoras: {
          respuesta: this.calidadPostCosecha.value.condEconomicasSecadoras
        },
        condEconomicasOtrosCalidadPostCosecha: {
          respuesta: this.calidadPostCosecha.value.condEconomicasOtrosCalidadPostCosecha
        }
      }
    };
  }

  setValues(formularioVerificacion: FormularioVerificacion): void {
    const seccionesIncentivos = formularioVerificacion.secciones.capacitacionesBeneficioPrograma.secciones.incentivos.secciones;
    this.calidadPostCosecha.get('necesitaCajonFermentacion')
      .setValue(seccionesIncentivos.calidadPostCosecha.preguntas.necesitaCajonFermentacion.respuesta);
    this.calidadPostCosecha.get('necesitaMarquesinas')
      .setValue(seccionesIncentivos.calidadPostCosecha.preguntas.necesitaMarquesinas.respuesta);
    this.calidadPostCosecha.get('necesitaTendales')
      .setValue(seccionesIncentivos.calidadPostCosecha.preguntas.necesitaTendales.respuesta);
    this.calidadPostCosecha.get('necesitaSecadoras')
      .setValue(seccionesIncentivos.calidadPostCosecha.preguntas.necesitaSecadoras.respuesta);
    this.calidadPostCosecha.get('necesitaOtrosCalidadPostCosecha')
      .setValue(seccionesIncentivos.calidadPostCosecha.preguntas.necesitaOtrosCalidadPostCosecha.respuesta);
    this.calidadPostCosecha.get('disponibilidadInvertirCajonFermentacion')
      .setValue(seccionesIncentivos.calidadPostCosecha.preguntas.disponibilidadInvertirCajonFermentacion.respuesta);
    this.calidadPostCosecha.get('disponibilidadInvertirMarquesinas')
      .setValue(seccionesIncentivos.calidadPostCosecha.preguntas.disponibilidadInvertirMarquesinas.respuesta);
    this.calidadPostCosecha.get('disponibilidadInvertirTendales')
      .setValue(seccionesIncentivos.calidadPostCosecha.preguntas.disponibilidadInvertirTendales.respuesta);
    this.calidadPostCosecha.get('disponibilidadInvertirSecadoras')
      .setValue(seccionesIncentivos.calidadPostCosecha.preguntas.disponibilidadInvertirSecadoras.respuesta);
    this.calidadPostCosecha.get('disponibilidadInvertirOtrosCalidadPostCosecha')
      .setValue(seccionesIncentivos.calidadPostCosecha.preguntas.disponibilidadInvertirOtrosCalidadPostCosecha.respuesta);
    this.calidadPostCosecha.get('condAdecuadasFermentacion')
      .setValue(seccionesIncentivos.calidadPostCosecha.preguntas.condAdecuadasFermentacion.respuesta);
    this.calidadPostCosecha.get('condAdecuadasMarquesinas')
      .setValue(seccionesIncentivos.calidadPostCosecha.preguntas.condAdecuadasMarquesinas.respuesta);
    this.calidadPostCosecha.get('condAdecuadasTendales')
      .setValue(seccionesIncentivos.calidadPostCosecha.preguntas.condAdecuadasTendales.respuesta);
    this.calidadPostCosecha.get('condAdecuadasSecadoras')
      .setValue(seccionesIncentivos.calidadPostCosecha.preguntas.condAdecuadasSecadoras.respuesta);
    this.calidadPostCosecha.get('condAdecuadasOtrosCalidadPostCosecha')
      .setValue(seccionesIncentivos.calidadPostCosecha.preguntas.condAdecuadasOtrosCalidadPostCosecha.respuesta);
    this.calidadPostCosecha.get('condEconomicasFermentacion')
      .setValue(seccionesIncentivos.calidadPostCosecha.preguntas.condEconomicasFermentacion.respuesta);
    this.calidadPostCosecha.get('condEconomicasMarquesinas')
      .setValue(seccionesIncentivos.calidadPostCosecha.preguntas.condEconomicasMarquesinas.respuesta);
    this.calidadPostCosecha.get('condEconomicasTendales')
      .setValue(seccionesIncentivos.calidadPostCosecha.preguntas.condEconomicasTendales.respuesta);
    this.calidadPostCosecha.get('condEconomicasSecadoras')
      .setValue(seccionesIncentivos.calidadPostCosecha.preguntas.condEconomicasSecadoras.respuesta);
    this.calidadPostCosecha.get('condEconomicasOtrosCalidadPostCosecha')
      .setValue(seccionesIncentivos.calidadPostCosecha.preguntas.condEconomicasOtrosCalidadPostCosecha.respuesta);
  }

}
