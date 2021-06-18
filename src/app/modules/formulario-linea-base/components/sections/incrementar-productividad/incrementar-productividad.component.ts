import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioLineaBase } from 'src/app/interfaces/formularioLineaBase';

@Component({
  selector: 'app-incrementar-productividad',
  templateUrl: './incrementar-productividad.component.html',
  styleUrls: ['./incrementar-productividad.component.css']
})
export class IncrementarProductividadComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  incrementarProductividad: FormGroup;

  proyectos: string[] = [
    "RECIBIR PLANTAS DE CACAO NACIONAL",
    "APRENDER ELAB. PRODUCTOS NATURALES"
  ];

  opciones: string[] = ["SI", "NO"];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.incrementarProductividad = this.formBuilder.group({
      recibirPlantasCacaoNacional: new FormControl(''),
      aprenderElabProductosNaturales: new FormControl('')
      // proyectos: new FormControl('')
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  get seccion(): any {
    return {
      preguntas: {
        recibirPlantasCacaoNacional: {
          respuesta: this.incrementarProductividad.value.recibirPlantasCacaoNacional
        },
        aprenderElabProductosNaturales: {
          respuesta: this.incrementarProductividad.value.aprenderElabProductosNaturales
        }
      }
    };
  }

  setValues(formularioLineaBase: FormularioLineaBase): void {
    this.incrementarProductividad.get('recibirPlantasCacaoNacional')
      .setValue(formularioLineaBase.secciones.incrementarProductividad.preguntas.recibirPlantasCacaoNacional.respuesta);
    this.incrementarProductividad.get('aprenderElabProductosNaturales')
      .setValue(formularioLineaBase.secciones.incrementarProductividad.preguntas.aprenderElabProductosNaturales.respuesta);
  }

}
