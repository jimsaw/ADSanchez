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

  opciones: string[] = ["SI", "NO"];

  beneficio: string[] = [];
  tiposBeneficio: string[] = ["ASISTENCIA TÉCNICA", "TRANSPORTE", "CAPACITACIÓN", "PRECIO MEJORADO", "PRECIO", "INSUMO", "OTRO"];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  hayAsociacion() {
    const hayAsociacion = this.parentForm.get('nivelAsociatividad').get('perteneceAsocProgrCertif').value;
    return hayAsociacion === 'SI';
  }

  otroBeneficio(): boolean {
    const beneficios = this.parentForm.get('nivelAsociatividad').get('tiposBeneficios').value;
    return beneficios.includes('OTRO');
  }

  recibeAyuda() {
    const recibeAyuda = this.parentForm.get('nivelAsociatividad').get('ayudaOtraInstitucion').value;
    return recibeAyuda === 'SI';
  }

}
