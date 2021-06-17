import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-registros-productor',
  templateUrl: './registros-productor.component.html',
  styleUrls: ['./registros-productor.component.css']
})
export class RegistrosProductorComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;
  yesNoAnswer;
  especifiqueTipoCuenta;

  constructor() { }

  ngOnInit(): void {
    this.yesNoAnswer = environment.constantes.formularioVerificacion.yesNoAnswer;
    this.especifiqueTipoCuenta = environment.constantes.formularioVerificacion.registrosProductorEspecifiqueTipoCuenta;
  }

  onSubmit() {

  }
}
