import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-conservacion-suelos-biodiversidad',
  templateUrl: './conservacion-suelos-biodiversidad.component.html',
  styleUrls: ['./conservacion-suelos-biodiversidad.component.css']
})
export class ConservacionSuelosBiodiversidadComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;
  yesNoAnswer;
  practicasConservacionSuelo;
  especiesArboles;

  constructor() { }

  ngOnInit(): void {
    this.yesNoAnswer = environment.constantes.formularioVerificacion.yesNoAnswer;
    this.practicasConservacionSuelo = environment.constantes.formularioVerificacion.conservacionSuelosBiodiversidadPractivasConservacionSuelo;
    this.especiesArboles = environment.constantes.formularioVerificacion.conservacionSuelosBiodiversidadEspeciesArboles;
  }

  onSubmit() {

  }
}
