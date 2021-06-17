import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-condiciones-laborales',
  templateUrl: './condiciones-laborales.component.html',
  styleUrls: ['./condiciones-laborales.component.css']
})
export class CondicionesLaboralesComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  tiposTrabajador: string[] = ["PERMANENTE", "OCASIONAL"];

  opciones: string[] = ["SI", "NO"];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  hayContratados() {
    const hayContratados = this.parentForm.get('condicionesLaborales').get('contrataTrabajadores').value;
    return hayContratados === 'SI';
  }

  contrataMenores() {
    const contrataMenores = this.parentForm.get('condicionesLaborales').get('contrataMenoresEdad').value;
    return contrataMenores === 'SI';
  }

}
