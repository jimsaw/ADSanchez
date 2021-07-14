import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioVerificacion } from 'src/app/interfaces/formularioVerificacion';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cosecha',
  templateUrl: './cosecha.component.html',
  styleUrls: ['./cosecha.component.css']
})
export class CosechaComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  cosecha: FormGroup;

  yesNoAnswer: string[];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.cosecha = this.formBuilder.group({
      cosechaSeparadoCacaoNacionalCCN51: new FormControl(''),
      plantasLaceracionesCicatricesMalaPractica: new FormControl('')
    });
   }

  ngOnInit(): void {
    this.yesNoAnswer = environment.constantes.formularioVerificacion.yesNoAnswer;
  }

  onSubmit() {

  }

  get seccion(): any {
    return {
      preguntas: {
        cosechaSeparadoCacaoNacionalCCN51: {
          respuesta: this.cosecha.value.cosechaSeparadoCacaoNacionalCCN51
        },
        plantasLaceracionesCicatricesMalaPractica: {
          respuesta: this.cosecha.value.plantasLaceracionesCicatricesMalaPractica
        }
      }
    };
  }

  setValues(formularioVerificacion: FormularioVerificacion): void {
    this.cosecha.get('cosechaSeparadoCacaoNacionalCCN51')
      .setValue(formularioVerificacion.secciones.cosecha.preguntas.cosechaSeparadoCacaoNacionalCCN51.respuesta);
    this.cosecha.get('plantasLaceracionesCicatricesMalaPractica')
      .setValue(formularioVerificacion.secciones.cosecha.preguntas.plantasLaceracionesCicatricesMalaPractica.respuesta);
  }

}
