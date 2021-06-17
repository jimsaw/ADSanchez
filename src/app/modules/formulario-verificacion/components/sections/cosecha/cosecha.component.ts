import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cosecha',
  templateUrl: './cosecha.component.html',
  styleUrls: ['./cosecha.component.css']
})
export class CosechaComponent implements OnInit {
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
