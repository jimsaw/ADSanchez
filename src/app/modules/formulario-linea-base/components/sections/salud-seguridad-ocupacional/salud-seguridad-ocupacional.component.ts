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

  opciones: string[] = ["SI", "NO"];

  tiposAccidente: string[] = ["LEVES", "GRAVES", "MUY GRAVES"];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  hayAccidente() {
    const hayAccidente = this.parentForm.get('saludSeguridadOcupacional').get('accidentesLaboralesUltimoAnio').value;
    return hayAccidente === 'SI';
  }

  hayIntoxicado() {
    const hayIntoxicado = this.parentForm.get('saludSeguridadOcupacional').get('periodoIntoxicacionPresente').value;
    return hayIntoxicado === 'SI';
  }

}
