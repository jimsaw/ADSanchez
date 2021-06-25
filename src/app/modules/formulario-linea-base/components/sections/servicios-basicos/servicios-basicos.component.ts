import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioLineaBase } from 'src/app/interfaces/formularioLineaBase';

@Component({
  selector: 'app-servicios-basicos',
  templateUrl: './servicios-basicos.component.html',
  styleUrls: ['./servicios-basicos.component.css']
})
export class ServiciosBasicosComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  serviciosBasicos: FormGroup;

  tiposAgua: string[] = ["POTABLE", "ENTUBADA", "POZO", "VERTIENTE NAT", "LLUVIA", "ESTERO", "RIO", "OTRO"];

  opciones: string[] = ["SI", "NO"];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.serviciosBasicos = this.formBuilder.group({
      energiaElectrica: new FormControl(''),
      tipoAguaConsumoFamiliar: new FormControl('')
    });
   }

  ngOnInit(): void {

  }

  onSubmit() {

  }

  get seccion(): any {
    return {
      preguntas: {
        energiaElectrica: {
          respuesta: this.serviciosBasicos.value.energiaElectrica
        },
        tipoAguaConsumoFamiliar: {
          respuesta: this.serviciosBasicos.value.tipoAguaConsumoFamiliar
        }
      }
    };
  }

  setValues(formularioLineaBase: FormularioLineaBase): void {
    this.serviciosBasicos.get('energiaElectrica')
      .setValue(formularioLineaBase.secciones.serviciosBasicos.preguntas.energiaElectrica.respuesta);
    this.serviciosBasicos.get('tipoAguaConsumoFamiliar')
      .setValue(formularioLineaBase.secciones.serviciosBasicos.preguntas.tipoAguaConsumoFamiliar.respuesta);
  }

}
