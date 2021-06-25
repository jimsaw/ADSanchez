import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioLineaBase } from 'src/app/interfaces/formularioLineaBase';

@Component({
  selector: 'app-preguntas-adicionales',
  templateUrl: './preguntas-adicionales.component.html',
  styleUrls: ['./preguntas-adicionales.component.css']
})
export class PreguntasAdicionalesComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  preguntasAdicionales: FormGroup;

  opciones: string[] = ["SI", "NO"];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.preguntasAdicionales = this.formBuilder.group({
      tieneAreaLibreParaSembrar: new FormControl(''),
      areaLibre: new FormControl(''),
      necesitaRehaReinjerto: new FormControl(''),
      cantidad: new FormControl('')
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  hayAreaLibre() {
    const hayAreaLibre = this.preguntasAdicionales.get('tieneAreaLibreParaSembrar').value;
    return hayAreaLibre === 'SI';
  }

  necesitaRehab() {
    const necesitaRehab = this.preguntasAdicionales.get('necesitaRehaReinjerto').value;
    return necesitaRehab === 'SI';
  }

  get seccion(): any {
    return {
      preguntas: {
        tieneAreaLibreParaSembrar: {
          respuesta: this.preguntasAdicionales.value.tieneAreaLibreParaSembrar,
          preguntas: {
            areaLibre: {
              respuesta: this.preguntasAdicionales.value.areaLibre
            }
          }
        },
        necesitaRehaReinjerto: {
          respuesta: this.preguntasAdicionales.value.necesitaRehaReinjerto,
          preguntas: {
            cantidad: {
              respuesta: this.preguntasAdicionales.value.cantidad
            }
          }
        }
      }
    };
  }

  setValues(formularioLineaBase: FormularioLineaBase): void {
    this.preguntasAdicionales.get('tieneAreaLibreParaSembrar')
      .setValue(formularioLineaBase.secciones.preguntasAdicionales.preguntas.tieneAreaLibreParaSembrar.respuesta);
    this.preguntasAdicionales.get('areaLibre')
      .setValue(formularioLineaBase.secciones.preguntasAdicionales.preguntas.tieneAreaLibreParaSembrar.preguntas.areaLibre.respuesta);
    this.preguntasAdicionales.get('necesitaRehaReinjerto')
      .setValue(formularioLineaBase.secciones.preguntasAdicionales.preguntas.necesitaRehaReinjerto.respuesta);
    this.preguntasAdicionales.get('cantidad')
      .setValue(formularioLineaBase.secciones.preguntasAdicionales.preguntas.necesitaRehaReinjerto.preguntas.cantidad.respuesta);
  }

}
