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

  propiedadTrans: string;
  propiedadesTransporte: string[] = ["PROPIO", "FLETADO"];

  tipoTrans: string;
  tiposTransporte: string[] = ["CHIVA", "CAMIONETA", "MOTO", "CAMION", "OTRO"];

  hayRegistro: string;
  hayAlmacenaCacao: string;
  opciones: string[] = ["SI", "NO"];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
