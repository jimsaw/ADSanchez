import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  propiedadesTransporte: string[] = ["PROPIO", "FLETADO"];

  tiposTransporte: string[] = ["CHIVA", "CAMIONETA", "MOTO", "CAMION", "OTRO"];

  opciones: string[] = ["SI", "NO"];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  hayRegistro() {
    const hayRegistro = this.parentForm.get('venta').get('registroFinancieroFinca').value;
    return hayRegistro === 'SI';
  }

  almacenaCacao() {
    const almacenaCacao = this.parentForm.get('venta').get('almacenaCacaoDespSecado').value;
    return almacenaCacao === 'SI';
  }

}
