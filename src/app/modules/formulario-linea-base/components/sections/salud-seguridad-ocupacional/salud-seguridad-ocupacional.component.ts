import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-salud-seguridad-ocupacional',
  templateUrl: './salud-seguridad-ocupacional.component.html',
  styleUrls: ['./salud-seguridad-ocupacional.component.css']
})
export class SaludSeguridadOcupacionalComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  hayAccidente: string;
  hayIntoxicado: string;
  hayCentroSalud: string;
  opciones: string[] = ["SI", "NO"];

  accidente: string;
  tiposAccidente: string[] = ["LEVES", "GRAVES", "MUY GRAVES"];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
