import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cacao-nacional-nuevos-clones',
  templateUrl: './cacao-nacional-nuevos-clones.component.html',
  styleUrls: ['./cacao-nacional-nuevos-clones.component.css']
})
export class CacaoNacionalNuevosClonesComponent implements OnInit {

  usosAnteriores: string[] = [
    "BOSQUE",
    "PLANTACION",
    "HUERTA VIEJA",
    "OTRO"
  ]

  variedades: string[] = [
    "103",
    "96",
    "95",
    "800",
    "801",
    "NO SABE",
    "OTRO"
  ]

  variedadesSembradasClas: string[] = ["POSITIVA", "NEGATIVA"];

  opcionesPlantulas: string[] = [
    "NEUTRAL",
    "FAVORABLE",
    "DESFAVORABLE"
  ]

  @Input()
  public parentForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  otroUsoAnteriorAreaNueva() {
    const uso = this.parentForm.get('cacaoNacionalNuevosClones').get('usoAnteriorAreaNueva').value;
    return uso === 'OTRO';
  }

  otroTipoVariedad() {
    const tipoVariedad = this.parentForm.get('cacaoNacionalNuevosClones').get('tipoVariedad').value;
    return tipoVariedad === 'OTRO';
  }

}
