import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-informacion-familia',
  templateUrl: './informacion-familia.component.html',
  styleUrls: ['./informacion-familia.component.css']
})
export class InformacionFamiliaComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  generos: string[] = [
    "MASCULINO",
    "FEMENINO"
  ]

  seguridadSocial: string[] = ["SI", "NO"];

  laboraFinca: string[] = ["SI", "NO"];

  otrosIngresos: string[] = ["SI", "NO"];

  opciones: string[] = ["SI", "NO"];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  m1labora() {
    const labora = this.parentForm.get('informacionFamilia').get('miembro1LaboraEnFinca').value;
    return labora === 'SI';
  }

  m2labora() {
    const labora = this.parentForm.get('informacionFamilia').get('miembro2LaboraEnFinca').value;
    return labora === 'SI';
  }

  m3labora() {
    const labora = this.parentForm.get('informacionFamilia').get('miembro3LaboraEnFinca').value;
    return labora === 'SI';
  }

  m4labora() {
    const labora = this.parentForm.get('informacionFamilia').get('miembro4LaboraEnFinca').value;
    return labora === 'SI';
  }

  deseaTrabajo() {
    const deseaTrabajo = this.parentForm.get('informacionFamilia').get('deseoTrabajoMedioTiempoProyectosFuturos').value;
    return deseaTrabajo === 'SI';
  }

}
