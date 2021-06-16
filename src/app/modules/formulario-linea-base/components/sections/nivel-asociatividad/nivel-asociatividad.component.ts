import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nivel-asociatividad',
  templateUrl: './nivel-asociatividad.component.html',
  styleUrls: ['./nivel-asociatividad.component.css']
})
export class NivelAsociatividadComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  hayBeneficios: string;
  hayAsociacion: string;
  recibeAyuda: string;
  opciones: string[] = ["SI", "NO"];

  beneficio: string[] = [];
  tiposBeneficio: string[] = ["ASISTENCIA TÉCNICA", "TRANSPORTE", "CAPACITACIÓN", "PRECIO MEJORADO", "PRECIO", "INSUMO", "OTRO"];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  otroBeneficio(): boolean {
    return this.beneficio.includes('OTRO');
  }

}
