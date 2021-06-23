import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-maquinaria-agricola',
  templateUrl: './maquinaria-agricola.component.html',
  styleUrls: ['./maquinaria-agricola.component.css']
})
export class MaquinariaAgricolaComponent implements OnInit {
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
