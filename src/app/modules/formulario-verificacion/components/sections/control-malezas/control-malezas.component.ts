import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-control-malezas',
  templateUrl: './control-malezas.component.html',
  styleUrls: ['./control-malezas.component.css']
})
export class ControlMalezasComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;
  yesNoAnswer;
  tipoMaleza;
  comoControlaMaleza;
  haceUsoMisma;
  tipoRecomendacion;

  constructor() { }

  ngOnInit(): void {
    this.yesNoAnswer = environment.constantes.formularioVerificacion.yesNoAnswer;
    this.tipoMaleza = environment.constantes.formularioVerificacion.controlMalezaTipoMaleza;
    this.comoControlaMaleza = environment.constantes.formularioVerificacion.controlMalezaComoControlaMaleza;
    this.haceUsoMisma = environment.constantes.formularioVerificacion.vecesAlAnio;
    this.tipoRecomendacion = environment.constantes.formularioVerificacion.controlMalezaTipoRecomendacion;
  }

  onSubmit() {

  }
}
