import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-fertilizacion',
  templateUrl: './fertilizacion.component.html',
  styleUrls: ['./fertilizacion.component.css']
})
export class FertilizacionComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;
  yesNoAnswer;
  productoFertilizaCacaotal;
  vecesAlAnio;
  tipoFertilizanteRecibido;
  percepcionFertilizanteRecibido;

  constructor() { }

  ngOnInit(): void {
    this.yesNoAnswer = environment.constantes.formularioVerificacion.yesNoAnswer;
    this.productoFertilizaCacaotal = environment.constantes.formularioVerificacion.fertilizacionTipoProductoFertilizaCacaotales;
    this.vecesAlAnio = environment.constantes.formularioVerificacion.vecesAlAnio;
    this.tipoFertilizanteRecibido = environment.constantes.formularioVerificacion.fertilizacionTipoFertilizanteRecibido;
    this.percepcionFertilizanteRecibido = environment.constantes.formularioVerificacion.fertilizacionPercepcionFertilizanteRecibido;
  }

  onSubmit() {

  }
}
