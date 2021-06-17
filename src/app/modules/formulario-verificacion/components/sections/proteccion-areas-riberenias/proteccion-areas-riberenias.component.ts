import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-proteccion-areas-riberenias',
  templateUrl: './proteccion-areas-riberenias.component.html',
  styleUrls: ['./proteccion-areas-riberenias.component.css']
})
export class ProteccionAreasRibereniasComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;
  yesNoAnswer;
  nombreFuenteHidrica;
  tipoFuenteHidrica;
  consideradaFuenteHidrica;
  comoBrindaProtFuentHidr;
  distanciaRequerida;

  constructor() { }

  ngOnInit(): void {
    this.yesNoAnswer = environment.constantes.formularioVerificacion.yesNoAnswer;
    this.nombreFuenteHidrica = environment.constantes.formularioVerificacion.proteccionAreasRibereniasNombreFuenteHidrica;
    this.tipoFuenteHidrica = environment.constantes.formularioVerificacion.proteccionAreasRibereniasTipoFuenteHidrica;
    this.consideradaFuenteHidrica = environment.constantes.formularioVerificacion.proteccionAreasRibereniasConsideradaFuenteHidrica;
    this.comoBrindaProtFuentHidr = environment.constantes.formularioVerificacion.proteccionAreasRibereniasComoBrindaProtFuentHidr;
    this.distanciaRequerida = environment.constantes.formularioVerificacion.proteccionAreasRibereniasDistanciaRequerida;
  }

  onSubmit() {

  }
}
