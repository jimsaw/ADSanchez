import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-fermentacion',
  templateUrl: './fermentacion.component.html',
  styleUrls: ['./fermentacion.component.css']
})
export class FermentacionComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;
  yesNoAnswer;
  fermentaCacao;
  razonNoFermenta;
  comoLoHace1;
  comoLoHace2;

  constructor() { }

  ngOnInit(): void {
    this.yesNoAnswer = environment.constantes.formularioVerificacion.yesNoAnswer;
    this.fermentaCacao = environment.constantes.formularioVerificacion.fermentacionFermentaCacao;
    this.razonNoFermenta = environment.constantes.formularioVerificacion.fermentacionRazonNoFermenta;
    this.comoLoHace1 = environment.constantes.formularioVerificacion.fermentacionComoHace1;
    this.comoLoHace2 = environment.constantes.formularioVerificacion.fermentacionComoHace2;
  }

  onSubmit() {

  }
}
