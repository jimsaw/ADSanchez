import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-proyectos-inversion',
  templateUrl: './proyectos-inversion.component.html',
  styleUrls: ['./proyectos-inversion.component.css']
})
export class ProyectosInversionComponent implements OnInit {
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
