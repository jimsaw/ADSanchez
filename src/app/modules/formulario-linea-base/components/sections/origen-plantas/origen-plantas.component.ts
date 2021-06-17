import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-origen-plantas',
  templateUrl: './origen-plantas.component.html',
  styleUrls: ['./origen-plantas.component.css']
})
export class OrigenPlantasComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  encargadosPropagacion: string[] = [
    "PRODUCTOR",
    "FAMILIAR",
    "ASESOR EXTERNO",
    "OTRO"
  ]

  conocimientos: string[] = [
    "TÉCNICO",
    "EMPÍRICO"
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  otroEncargado() {
    const otroEncargado = this.parentForm.get('origenPlantas').get('encargadoPropagacion').value;
    return otroEncargado === 'OTRO';
  }

}
