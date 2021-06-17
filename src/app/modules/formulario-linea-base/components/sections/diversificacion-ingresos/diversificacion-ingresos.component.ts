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

  hayHuertos: string;
  hayViveres: string;
  hayVentaFert: string;
  hayRehab: string;
  hayBrigada: string;
  tieneExperiencia: string;
  opciones: string[] = [
    "SI", "NO"
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
