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
      viejosInjertados: new FormArray([
        new FormGroup({
          areaViejoInjertado: new FormControl(''),
          edadViejoInjertado: new FormControl(''),
        }),
      ]),
      areaTotalNuevosClones: new FormControl(''),
      nuevosClones: new FormArray([
        new FormGroup({
          areaNuevosClones: new FormControl(''),
          edadNuevosClones: new FormControl('')
        })
      ]),
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

  viejosInjertadosToObject(): any[] {
    const questions: any[] = [];
    for (let value of this.getFormArray("viejosInjertados").controls) {
      const viejoInjertado = {
        areaViejoInjertado: {
          respuesta: value.get("areaViejoInjertado").value
        },
        edadViejoInjertado: {
          respuesta: value.get("edadViejoInjertado").value
        }
      }
      questions.push(viejoInjertado);
    }
    return questions;
  }

  createNuevosClonesField(): FormGroup {
    return new FormGroup({
      areaNuevosClones: new FormControl(''),
      edadNuevosClones: new FormControl(''),
    });
  }

  addNuevosClones(): void {
    this.getFormArray("nuevosClones").push(this.createNuevosClonesField());
  }

  deleteNuevosClones(index: number): void {
    this.getFormArray("nuevosClones").removeAt(index);
  }

  nuevosClonesToObject(): any[] {
    const questions: any[] = [];
    for (let value of this.getFormArray("nuevosClones").controls) {
      const nuevosClones = {
        areaNuevosClones: {
          respuesta: value.get("areaNuevosClones").value
        },
        edadNuevosClones: {
          respuesta: value.get("edadNuevosClones").value
        }
      }
      questions.push(nuevosClones);
    }
    return questions;
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
        viejosInjertados: {
          arreglo: this.viejosInjertadosToObject()
        },
        areaTotalNuevosClones: {
          respuesta: this.cacaoNacional.value.areaTotalNuevosClones
        },
        nuevosClones: {
          arreglo: this.nuevosClonesToObject()
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

  setViejosInjertados(formularioLineaBase: FormularioLineaBase): void {
    formularioLineaBase.secciones.cacaoNacional.preguntas.viejosInjertados.arreglo.forEach((value, index) => {
      if (index !== 0) {
        this.addViejoInjertado();
      }
      this.getFormArray("viejosInjertados").controls[index].get("areaViejoInjertado").setValue(value["areaViejoInjertado"]["respuesta"]);
      this.getFormArray("viejosInjertados").controls[index].get("edadViejoInjertado").setValue(value["edadViejoInjertado"]["respuesta"]);
    });
  }

  setNuevosClones(formularioLineaBase: FormularioLineaBase): void {
    formularioLineaBase.secciones.cacaoNacional.preguntas.nuevosClones.arreglo.forEach((value, index) => {
      if (index !== 0) {
        this.addNuevosClones();
      }
      this.getFormArray("nuevosClones").controls[index].get("areaNuevosClones").setValue(value["areaNuevosClones"]["respuesta"]);
      this.getFormArray("nuevosClones").controls[index].get("edadNuevosClones").setValue(value["edadNuevosClones"]["respuesta"]);
    });
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
    this.setViejosInjertados(formularioLineaBase);
    this.setNuevosClones(formularioLineaBase);
    this.cacaoNacional.get('areaTotalNuevosClones')
      .setValue(formularioLineaBase.secciones.cacaoNacional.preguntas.areaTotalNuevosClones.respuesta);
    this.cacaoNacional.get('produccionAnioAnteriorCacaoNacional')
      .setValue(formularioLineaBase.secciones.cacaoNacional.preguntas.produccionAnioAnteriorCacaoNacional.respuesta);
    this.cacaoNacional.get('precioPromedioXCacao')
      .setValue(formularioLineaBase.secciones.cacaoNacional.preguntas.precioPromedioXCacao.respuesta);
  }

}
