import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-secado',
  templateUrl: './secado.component.html',
  styleUrls: ['./secado.component.css']
})
export class SecadoComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;
  yesNoAnswer;
  nivelHumedad;
  comoRealizaSecado;

  constructor() { }

  ngOnInit(): void {
    this.yesNoAnswer = environment.constantes.formularioVerificacion.yesNoAnswer;
    this.nivelHumedad = environment.constantes.formularioVerificacion.secadoNivelHumedad;
    this.comoRealizaSecado = environment.constantes.formularioVerificacion.secadoComoRealizaSecado;
  }

  onSubmit() {

  }
}
