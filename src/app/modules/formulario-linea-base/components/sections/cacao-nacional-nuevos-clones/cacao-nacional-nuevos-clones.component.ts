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

  @Input()
  public parentForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
