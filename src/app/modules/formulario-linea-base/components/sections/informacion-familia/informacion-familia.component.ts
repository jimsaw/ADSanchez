import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-informacion-familia',
  templateUrl: './informacion-familia.component.html',
  styleUrls: ['./informacion-familia.component.css']
})
export class InformacionFamiliaComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  m1Genero: string;
  m2Genero: string;
  m3Genero: string;
  m4Genero: string;
  generos: string[] = [
    "MASCULINO",
    "FEMENINO"
  ]


  m1Seguridad: string;
  m2Seguridad: string;
  m3Seguridad: string;
  m4Seguridad: string;
  seguridadSocial: string[] = ["SI", "NO"];

  m1Labora: string;
  m2Labora: string;
  m3Labora: string;
  m4Labora: string;
  laboraFinca: string[] = ["SI", "NO"];


  m1Ingresos: string;
  m2Ingresos: string;
  m3Ingresos: string;
  m4Ingresos: string;
  otrosIngresos: string[] = ["SI", "NO"];

  famDiscapacitado: string;
  esposaInvolucrada: string;
  esposoIncluye: string;
  ingresoAdicional: string;
  trabajoTiempo: string;
  hijoInteresado: string;
  opciones: string[] = ["SI", "NO"];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
