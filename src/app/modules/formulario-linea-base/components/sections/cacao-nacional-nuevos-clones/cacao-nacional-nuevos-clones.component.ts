import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cacao-nacional-nuevos-clones',
  templateUrl: './cacao-nacional-nuevos-clones.component.html',
  styleUrls: ['./cacao-nacional-nuevos-clones.component.css']
})
export class CacaoNacionalNuevosClonesComponent implements OnInit {

  selectedUso: string;
  usosAnteriores: string[] = [
    "BOSQUE",
    "PLANTACION",
    "HUERTA VIEJA",
    "OTRO"
  ]

  tipoVariedad: string;
  variedades: string[] = [
    "103",
    "96",
    "95",
    "800",
    "801",
    "NO SABE",
    "OTRO"
  ]

  selectedVarSembrada: string;
  selection = new SelectionModel<any>(false, []);
  variedadesSembradasClas: string[] = ["POSITIVA", "NEGATIVA"];

  optAdaptacion: string;
  optRendimiento: string;
  optVigor: string;
  optResistencia: string;
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

}
