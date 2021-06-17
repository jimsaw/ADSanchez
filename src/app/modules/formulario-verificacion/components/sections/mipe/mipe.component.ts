import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mipe',
  templateUrl: './mipe.component.html',
  styleUrls: ['./mipe.component.css']
})
export class MIPEComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;
  yesNoAnswer;
  tipoControl;

  constructor() { }

  ngOnInit(): void {
    this.yesNoAnswer = environment.constantes.formularioVerificacion.yesNoAnswer;
    this.tipoControl = environment.constantes.formularioVerificacion.mipeTipoControl;
  }

  onSubmit() {

  }
}
