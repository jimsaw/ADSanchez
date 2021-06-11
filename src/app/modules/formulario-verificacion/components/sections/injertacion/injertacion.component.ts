import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-injertacion',
  templateUrl: './injertacion.component.html',
  styleUrls: ['./injertacion.component.css']
})
export class InjertacionComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;
  yesNoAnswer;
  meses;

  constructor() { }

  ngOnInit(): void {
    this.yesNoAnswer = environment.constantes.formularioVerificacion.yesNoAnswer;
    this.meses = environment.constantes.formularioVerificacion.Meses;
  }

  onSubmit() {

  }

}
