import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-datos-finca',
  templateUrl: './datos-finca.component.html',
  styleUrls: ['./datos-finca.component.css']
})
export class DatosFincaComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;
  yesNoAnswer;
  datosFincaMesIncremento;
  datosFincaMotivoAreaNueva;
  datosFincaUsoAreaNueva;

  constructor() { }

  ngOnInit(): void {
    this.yesNoAnswer = environment.constantes.formularioVerificacion.yesNoAnswer;
    this.datosFincaMesIncremento = environment.constantes.formularioVerificacion.Meses;
    this.datosFincaMotivoAreaNueva = environment.constantes.formularioVerificacion.datosFincaMotivoAreaNueva;
    this.datosFincaUsoAreaNueva = environment.constantes.formularioVerificacion.datosFincaUsoAreaNueva;
  }

  onSubmit() {

  }

}
