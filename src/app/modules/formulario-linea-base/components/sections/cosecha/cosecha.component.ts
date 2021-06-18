import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioLineaBase } from 'src/app/interfaces/formularioLineaBase';

@Component({
  selector: 'app-cosecha',
  templateUrl: './cosecha.component.html',
  styleUrls: ['./cosecha.component.css']
})
export class CosechaComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  cosecha: FormGroup;

  periodosTumba: string[] = ["CADA 8 DÍAS", "CADA 15 DÍAS", "CADA MES"];

  opciones: string[] = ["SI", "NO"];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.cosecha = this.formBuilder.group({
      periodoCadaTumba: new FormControl(''),
      latasCacaoXTumba: new FormControl(''),
      realizaEscurridoSecadoCCN51: new FormControl(''),
      diasFermentadoCacao: new FormControl('')
    });
   }

  ngOnInit(): void {
    
  }

  onSubmit() {

  }

  get seccion(): any {
    return {
      preguntas: {
        periodoCadaTumba: {
          respuesta: this.cosecha.value.periodoCadaTumba
        },
        latasCacaoXTumba: {
          respuesta: this.cosecha.value.latasCacaoXTumba
        },
        realizaEscurridoSecadoCCN51: {
          respuesta: this.cosecha.value.realizaEscurridoSecadoCCN51
        },
        diasFermentadoCacao: {
          respuesta: this.cosecha.value.diasFermentadoCacao
        }
      }
    };
  }

  setValues(formularioLineaBase: FormularioLineaBase): void {
    this.cosecha.get('periodoCadaTumba')
      .setValue(formularioLineaBase.secciones.cosecha.preguntas.periodoCadaTumba.respuesta);
    this.cosecha.get('latasCacaoXTumba')
      .setValue(formularioLineaBase.secciones.cosecha.preguntas.latasCacaoXTumba.respuesta);
    this.cosecha.get('realizaEscurridoSecadoCCN51')
      .setValue(formularioLineaBase.secciones.cosecha.preguntas.realizaEscurridoSecadoCCN51.respuesta);
    this.cosecha.get('diasFermentadoCacao')
      .setValue(formularioLineaBase.secciones.cosecha.preguntas.diasFermentadoCacao.respuesta);
}

}
