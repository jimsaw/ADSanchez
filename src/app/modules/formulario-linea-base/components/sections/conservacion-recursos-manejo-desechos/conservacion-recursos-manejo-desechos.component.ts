import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioLineaBase } from 'src/app/interfaces/formularioLineaBase';

@Component({
  selector: 'app-conservacion-recursos-manejo-desechos',
  templateUrl: './conservacion-recursos-manejo-desechos.component.html',
  styleUrls: ['./conservacion-recursos-manejo-desechos.component.css']
})
export class ConservacionRecursosManejoDesechosComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  conservacionRecursosManejoDesechos: FormGroup;

  opciones: string[] = ["SI", "NO"];

  lugaresDesecho: string[] = ["SERVICIO HIGIÉNICO", "POZO SÉPTICO", "LETRINA", "NINGUNO"];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.conservacionRecursosManejoDesechos = this.formBuilder.group({
      conocimientoManejoDesechos: new FormControl(''),
      productoContaminaEcosistema: new FormControl(''),
      ubicacionDesechosAguasNegras: new FormControl(''),
      tieneArbolesSombrio: new FormControl(''),
      cultivaVegetalesHortalizasFrutas: new FormControl(''),
      compraProductosMercadoLocales: new FormControl(''),
      valorPromedioGastado: new FormControl('')
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  hayEspacio() {
    const hayEspacio = this.conservacionRecursosManejoDesechos.get('cultivaVegetalesHortalizasFrutas').value;
    return hayEspacio === 'SI';
  }

  get seccion(): any {
    return {
      preguntas: {
        conocimientoManejoDesechos: {
          respuesta: this.conservacionRecursosManejoDesechos.value.conocimientoManejoDesechos
        },
        productoContaminaEcosistema: {
          respuesta: this.conservacionRecursosManejoDesechos.value.productoContaminaEcosistema,
          preguntas: {
            ubicacionDesechosAguasNegras: {
              respuesta: this.conservacionRecursosManejoDesechos.value.ubicacionDesechosAguasNegras
            }
          }
        },
        tieneArbolesSombrio: {
          respuesta: this.conservacionRecursosManejoDesechos.value.tieneArbolesSombrio
        },
        cultivaVegetalesHortalizasFrutas: {
          respuesta: this.conservacionRecursosManejoDesechos.value.cultivaVegetalesHortalizasFrutas
        },
        compraProductosMercadoLocales: {
          respuesta: this.conservacionRecursosManejoDesechos.value.compraProductosMercadoLocales,
          preguntas: {
            valorPromedioGastado: {
              respuesta: this.conservacionRecursosManejoDesechos.value.valorPromedioGastado
            }
          }
        }
      }
    };
  }

  setValues(formularioLineaBase: FormularioLineaBase): void {
    this.conservacionRecursosManejoDesechos.get('conocimientoManejoDesechos')
      .setValue(formularioLineaBase.secciones.conservacionRecursosManejoDesechos.preguntas.conocimientoManejoDesechos.respuesta);
    this.conservacionRecursosManejoDesechos.get('productoContaminaEcosistema')
      .setValue(formularioLineaBase.secciones.conservacionRecursosManejoDesechos.preguntas.productoContaminaEcosistema.respuesta);
    this.conservacionRecursosManejoDesechos.get('ubicacionDesechosAguasNegras')
      .setValue(formularioLineaBase.secciones.conservacionRecursosManejoDesechos.preguntas.productoContaminaEcosistema.preguntas.ubicacionDesechosAguasNegras.respuesta);
    this.conservacionRecursosManejoDesechos.get('tieneArbolesSombrio')
      .setValue(formularioLineaBase.secciones.conservacionRecursosManejoDesechos.preguntas.tieneArbolesSombrio.respuesta);
    this.conservacionRecursosManejoDesechos.get('cultivaVegetalesHortalizasFrutas')
      .setValue(formularioLineaBase.secciones.conservacionRecursosManejoDesechos.preguntas.cultivaVegetalesHortalizasFrutas.respuesta);
    this.conservacionRecursosManejoDesechos.get('compraProductosMercadoLocales')
      .setValue(formularioLineaBase.secciones.conservacionRecursosManejoDesechos.preguntas.compraProductosMercadoLocales.respuesta);
    this.conservacionRecursosManejoDesechos.get('valorPromedioGastado')
      .setValue(formularioLineaBase.secciones.conservacionRecursosManejoDesechos.preguntas.compraProductosMercadoLocales.preguntas.valorPromedioGastado.respuesta);
}

}
