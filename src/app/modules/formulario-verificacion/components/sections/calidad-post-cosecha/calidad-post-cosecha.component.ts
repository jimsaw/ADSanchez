import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-calidad-post-cosecha',
  templateUrl: './calidad-post-cosecha.component.html',
  styleUrls: ['./calidad-post-cosecha.component.css']
})
export class CalidadPostCosechaComponent implements OnInit {
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
