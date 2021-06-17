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

  opciones: string[] = ["SI", "NO"];

  plagas: string[] = ["COCHINILLA", "XILEBORUS", "TRIPS", "CHINCHORRO", "HORMIGA", "OROZCO", "OTROS"];

  enfermedades: string[] = ["PHYTOPHTORA", "ESCOBA BRUJA", "MONILLA", "MAL DE MACHETE", "OTROS"];

  meses: string[] = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"]

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  llevaRegistroPerdidas() {
    const llevaRegistroPerdidas = this.parentForm.get('practicasAgricolas').get('llevaRegistroPerdidasMazorcasXMonilla').value;
    return llevaRegistroPerdidas === 'SI';
  }

}
