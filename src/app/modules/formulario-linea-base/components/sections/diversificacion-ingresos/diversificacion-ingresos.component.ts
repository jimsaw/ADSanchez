import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-diversificacion-ingresos',
  templateUrl: './diversificacion-ingresos.component.html',
  styleUrls: ['./diversificacion-ingresos.component.css']
})
export class DiversificacionIngresosComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  proyectos: string[] = [
    "HUERTOS ORGANICOS",
    "DESARROLLO DE VIVEROS",
    "DESARROLLO Y VENTA DE FERTILIZANTES",
    "REHABILITACIÓN DE FINCA",
    "BRIGADA DE PODADORES"
  ];

  opciones: string[] = [
    "SI", "NO"
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  tieneExperiencia() {
    const tieneExperiencia = this.parentForm.get('diversificacionIngresos').get('contarExperienciaPoda').value;
    return tieneExperiencia === 'SI';
  }

}
