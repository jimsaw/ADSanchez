import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-practicas-agricolas',
  templateUrl: './practicas-agricolas.component.html',
  styleUrls: ['./practicas-agricolas.component.css']
})
export class PracticasAgricolasComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  interesFertilizante: string;
  perdidaMazorca: string;
  opciones: string[] = ["SI", "NO"];

  selectedPlaga: string;
  plagas: string[] = ["COCHINILLA", "XILEBORUS", "TRIPS", "CHINCHORRO", "HORMIGA", "OROZCO", "OTROS"];

  selectedEnfermedad: string;
  enfermedades: string[] = ["PHYTOPHTORA", "ESCOBA BRUJA", "MONILLA", "MAL DE MACHETE", "OTROS"];


  fertilizacionMeses: string;
  podaMeses: string;
  malezaMeses: string;
  mipeMeses: string;
  cosechaMeses: string;
  meses: string[] = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"]

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
