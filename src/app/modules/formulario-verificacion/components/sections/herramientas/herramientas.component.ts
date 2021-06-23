import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-herramientas',
  templateUrl: './herramientas.component.html',
  styleUrls: ['./herramientas.component.css']
})
export class HerramientasComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;
  yesNoAnswer;
  estado;

  constructor() { }

  ngOnInit(): void {
    this.yesNoAnswer = environment.constantes.formularioVerificacion.yesNoAnswer;
    this.estado = environment.constantes.formularioVerificacion.estado;
  }

  onSubmit() {

  }
}
