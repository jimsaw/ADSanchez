import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioVerificacion } from 'src/app/interfaces/formularioVerificacion';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-injertacion',
  templateUrl: './injertacion.component.html',
  styleUrls: ['./injertacion.component.css']
})
export class InjertacionComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  public injertacion: FormGroup;

  yesNoAnswer: string[];
  meses: string[];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.injertacion = this.formBuilder.group({
      realizoInjertosUltimos12Meses: new FormControl(''),
      mesRealizoInjertos: new FormControl('')
    });
   }

  ngOnInit(): void {
    this.yesNoAnswer = environment.constantes.formularioVerificacion.yesNoAnswer;
    this.meses = environment.constantes.formularioVerificacion.Meses;
  }

  onSubmit() {

  }

  realizoInjertacion(): boolean {
    return this.injertacion.get('realizoInjertosUltimos12Meses').value === 'SI';
  }

  get seccion(): any {
    return {
      preguntas: {
        realizoInjertosUltimos12Meses: {
          respuesta: this.injertacion.value.realizoInjertosUltimos12Meses,
          preguntas: {
            mesRealizoInjertos: {
              respuesta: this.injertacion.value.mesRealizoInjertos
            }
          }
        }
      }
    };
  }

  setValues(formularioVerificacion: FormularioVerificacion): void {
    this.injertacion.get('realizoInjertosUltimos12Meses')
      .setValue(formularioVerificacion.secciones.injertacion.preguntas.realizoInjertosUltimos12Meses.respuesta);
    this.injertacion.get('mesRealizoInjertos')
      .setValue(formularioVerificacion.secciones.injertacion.preguntas.realizoInjertosUltimos12Meses.preguntas.mesRealizoInjertos.respuesta);
  }

}
