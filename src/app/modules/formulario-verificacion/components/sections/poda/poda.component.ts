import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-poda',
  templateUrl: './poda.component.html',
  styleUrls: ['./poda.component.css']
})
export class PodaComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;
  yesNoAnswer;
  tipoPodaAplica;
  enfermedades;
  plagas;

  constructor() { }

  ngOnInit(): void {
    this.yesNoAnswer = environment.constantes.formularioVerificacion.yesNoAnswer;
    this.tipoPodaAplica = environment.constantes.formularioVerificacion.podaTipoPodaAplica;
    this.enfermedades = environment.constantes.formularioVerificacion.podaEnfermedades;
    this.plagas = environment.constantes.formularioVerificacion.podaPlagas;
  }

  onSubmit() {

  }
}
