import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioLineaBase } from 'src/app/interfaces/formularioLineaBase';

@Component({
  selector: 'app-cacao-nacional',
  templateUrl: './cacao-nacional.component.html',
  styleUrls: ['./cacao-nacional.component.css']
})
export class CacaoNacionalComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  cacaoNacional: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  )
  { 
    this.cacaoNacional = this.formBuilder.group({
      areaTotalNacional: new FormControl(''),
      areaTotalNacionalViejo: new FormControl(''),
      edadCacaoViejo: new FormControl(''),
      brotesBasales: new FormControl(''),
      arbolesElite: new FormControl(''),
      areaTotalViejoInjertado: new FormControl(''),
      areaViejoInjertado: new FormControl(''),
      edadViejoInjertado: new FormControl(''),
      areaViejoInjertado2: new FormControl(''),
      edadViejoInjertado2: new FormControl(''),
      areaTotalNuevosClones: new FormControl(''),
      areaNuevosClones: new FormControl(''),
      edadNuevosClones: new FormControl(''),
      areaNuevosClones2: new FormControl(''),
      edadNuevosClones2: new FormControl(''),
      areaNuevosClones3: new FormControl(''),
      edadNuevosClones3: new FormControl(''),
      produccionAnioAnteriorCacaoNacional: new FormControl(''),
      precioPromedioXCacao: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  getFormArray(key: string): FormArray {
    return this.cacaoNacional.get(key) as FormArray;
  }

  createViejoInjertadoField(): FormGroup {
    return new FormGroup({
      areaViejoInjertado: new FormControl(''),
      edadViejoInjertado: new FormControl(''),
    });
  }

  addViejoInjertado(): void {
    this.getFormArray("viejosInjertados").push(this.createViejoInjertadoField());
  }

  deleteViejoInjertado(index: number): void {
    this.getFormArray("viejosInjertados").removeAt(index);
  }

  get seccion(): any {
    return {
      preguntas: {
        areaTotalNacional: {
          respuesta: this.cacaoNacional.value.areaTotalNacional
        },
        areaTotalNacionalViejo: {
          respuesta: this.cacaoNacional.value.areaTotalNacionalViejo
        },
        edadCacaoViejo: {
          respuesta: this.cacaoNacional.value.edadCacaoViejo
        },
        brotesBasales: {
          respuesta: this.cacaoNacional.value.brotesBasales
        },
        arbolesElite: {
          respuesta: this.cacaoNacional.value.arbolesElite
        },
        areaTotalViejoInjertado: {
          respuesta: this.cacaoNacional.value.areaTotalViejoInjertado
        },
        areaViejoInjertado: {
          respuesta: this.cacaoNacional.value.areaViejoInjertado
        },
        edadViejoInjertado: {
          respuesta: this.cacaoNacional.value.edadViejoInjertado
        },
        areaViejoInjertado2: {
          respuesta: this.cacaoNacional.value.areaViejoInjertado2
        },
        edadViejoInjertado2: {
          respuesta: this.cacaoNacional.value.edadViejoInjertado2
        },
        areaTotalNuevosClones: {
          respuesta: this.cacaoNacional.value.areaTotalNuevosClones
        },
        areaNuevosClones: {
          respuesta: this.cacaoNacional.value.areaNuevosClones
        },
        edadNuevosClones: {
          respuesta: this.cacaoNacional.value.edadNuevosClones
        },
        areaNuevosClones2: {
          respuesta: this.cacaoNacional.value.areaNuevosClones2
        },
        edadNuevosClones2: {
          respuesta: this.cacaoNacional.value.edadNuevosClones2
        },
        areaNuevosClones3: {
          respuesta: this.cacaoNacional.value.areaNuevosClones3
        },
        edadNuevosClones3: {
          respuesta: this.cacaoNacional.value.edadNuevosClones3
        },
        produccionAnioAnteriorCacaoNacional: {
          respuesta: this.cacaoNacional.value.produccionAnioAnteriorCacaoNacional
        },
        precioPromedioXCacao: {
          respuesta: this.cacaoNacional.value.precioPromedioXCacao
        }
      }
    };
  }

  setValues(formularioLineaBase: FormularioLineaBase): void {
    this.cacaoNacional.get('areaTotalNacional')
      .setValue(formularioLineaBase.secciones.cacaoNacional.preguntas.areaTotalNacional.respuesta);
    this.cacaoNacional.get('areaTotalNacionalViejo')
      .setValue(formularioLineaBase.secciones.cacaoNacional.preguntas.areaTotalNacionalViejo.respuesta);
    this.cacaoNacional.get('edadCacaoViejo')
      .setValue(formularioLineaBase.secciones.cacaoNacional.preguntas.edadCacaoViejo.respuesta);
    this.cacaoNacional.get('brotesBasales')
      .setValue(formularioLineaBase.secciones.cacaoNacional.preguntas.brotesBasales.respuesta);
    this.cacaoNacional.get('arbolesElite')
      .setValue(formularioLineaBase.secciones.cacaoNacional.preguntas.arbolesElite.respuesta);
    this.cacaoNacional.get('areaTotalViejoInjertado')
      .setValue(formularioLineaBase.secciones.cacaoNacional.preguntas.areaTotalViejoInjertado.respuesta);
    this.cacaoNacional.get('areaViejoInjertado')
      .setValue(formularioLineaBase.secciones.cacaoNacional.preguntas.areaViejoInjertado.respuesta);
    this.cacaoNacional.get('edadViejoInjertado')
      .setValue(formularioLineaBase.secciones.cacaoNacional.preguntas.edadViejoInjertado.respuesta);
    this.cacaoNacional.get('areaViejoInjertado2')
      .setValue(formularioLineaBase.secciones.cacaoNacional.preguntas.areaViejoInjertado2.respuesta);
    this.cacaoNacional.get('edadViejoInjertado2')
      .setValue(formularioLineaBase.secciones.cacaoNacional.preguntas.edadViejoInjertado2.respuesta);
    this.cacaoNacional.get('areaTotalNuevosClones')
      .setValue(formularioLineaBase.secciones.cacaoNacional.preguntas.areaTotalNuevosClones.respuesta);
    this.cacaoNacional.get('areaNuevosClones')
      .setValue(formularioLineaBase.secciones.cacaoNacional.preguntas.areaNuevosClones.respuesta);
    this.cacaoNacional.get('edadNuevosClones')
      .setValue(formularioLineaBase.secciones.cacaoNacional.preguntas.edadNuevosClones.respuesta);
    this.cacaoNacional.get('areaNuevosClones2')
      .setValue(formularioLineaBase.secciones.cacaoNacional.preguntas.areaNuevosClones2.respuesta);
    this.cacaoNacional.get('edadNuevosClones2')
      .setValue(formularioLineaBase.secciones.cacaoNacional.preguntas.edadNuevosClones2.respuesta);
    this.cacaoNacional.get('areaNuevosClones3')
      .setValue(formularioLineaBase.secciones.cacaoNacional.preguntas.areaNuevosClones3.respuesta);
    this.cacaoNacional.get('edadNuevosClones3')
      .setValue(formularioLineaBase.secciones.cacaoNacional.preguntas.edadNuevosClones3.respuesta);
    this.cacaoNacional.get('produccionAnioAnteriorCacaoNacional')
      .setValue(formularioLineaBase.secciones.cacaoNacional.preguntas.produccionAnioAnteriorCacaoNacional.respuesta);
    this.cacaoNacional.get('precioPromedioXCacao')
      .setValue(formularioLineaBase.secciones.cacaoNacional.preguntas.precioPromedioXCacao.respuesta);
  }

}
