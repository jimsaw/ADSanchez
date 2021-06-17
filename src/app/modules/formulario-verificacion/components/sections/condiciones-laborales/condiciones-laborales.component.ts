import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-condiciones-laborales',
  templateUrl: './condiciones-laborales.component.html',
  styleUrls: ['./condiciones-laborales.component.css']
})
export class CondicionesLaboralesComponent implements OnInit {
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
