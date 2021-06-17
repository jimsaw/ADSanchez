import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-salud-seguridad-ocupacional',
  templateUrl: './salud-seguridad-ocupacional.component.html',
  styleUrls: ['./salud-seguridad-ocupacional.component.css']
})
export class SaludSeguridadOcupacionalComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;
  yesNoAnswer;

  constructor() { }

  ngOnInit(): void {
    this.yesNoAnswer = environment.constantes.formularioVerificacion.yesNoAnswer;
  }

  onSubmit() {

  }
}
