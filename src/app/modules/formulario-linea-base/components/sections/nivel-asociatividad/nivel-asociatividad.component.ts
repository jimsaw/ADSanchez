import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioLineaBase } from 'src/app/interfaces/formularioLineaBase';

@Component({
  selector: 'app-nivel-asociatividad',
  templateUrl: './nivel-asociatividad.component.html',
  styleUrls: ['./nivel-asociatividad.component.css']
})
export class NivelAsociatividadComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  nivelAsociatividad: FormGroup;

  opciones: string[] = ["SI", "NO"];

  beneficio: string[] = [];
  tiposBeneficio: string[] = ["ASISTENCIA TÉCNICA", "TRANSPORTE", "CAPACITACIÓN", "PRECIO MEJORADO", "PRECIO", "INSUMO", "OTRO"];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.nivelAsociatividad = this.formBuilder.group({
      perteneceAsocProgrCertif: new FormControl(''),
      nombreAsociacion: new FormControl(''),
      cantidadMiembros: new FormControl(''),
      recibeBeneficios: new FormControl(''),
      tiposBeneficios: new FormControl(''),
      otroTiposBeneficios: new FormControl(''),
      ayudaOtraInstitucion: new FormControl(''),
      nombreOtraInstitucion: new FormControl(''),
      tipoAyuda: new FormControl('')
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  recibeBeneficio() {
    const recibeBeneficio = this.nivelAsociatividad.get('recibeBeneficios').value;
    return recibeBeneficio === 'SI';
  }

  hayAsociacion() {
    const hayAsociacion = this.nivelAsociatividad.get('perteneceAsocProgrCertif').value;
    return hayAsociacion === 'SI';
  }

  otroBeneficio(): boolean {
    const beneficios = this.nivelAsociatividad.get('tiposBeneficios').value;
    return beneficios.includes('OTRO');
  }

  recibeAyuda() {
    const recibeAyuda = this.nivelAsociatividad.get('ayudaOtraInstitucion').value;
    return recibeAyuda === 'SI';
  }

  get seccion(): any {
    return {
      preguntas: {
        perteneceAsocProgrCertif: {
          respuesta: this.nivelAsociatividad.value.perteneceAsocProgrCertif,
          preguntas: {
            nombreAsociacion: {
              respuesta: this.nivelAsociatividad.value.nombreAsociacion
            },
            cantidadMiembros: {
              respuesta: this.nivelAsociatividad.value.cantidadMiembros
            },
            recibeBeneficios: {
              respuesta: this.nivelAsociatividad.value.recibeBeneficios
            },
            tiposBeneficios: {
              respuesta: this.nivelAsociatividad.value.tiposBeneficios,
              preguntas: {
                otroTiposBeneficios: {
                  respuesta: this.nivelAsociatividad.value.otroTiposBeneficios,
                }
              }
            }
          }
        },
        ayudaOtraInstitucion: {
          respuesta: this.nivelAsociatividad.value.ayudaOtraInstitucion,
          preguntas: {
            nombreOtraInstitucion: {
              respuesta: this.nivelAsociatividad.value.nombreOtraInstitucion
            },
            tipoAyuda: {
              respuesta: this.nivelAsociatividad.value.tipoAyuda
            }
          }
        }
      }
    };
  }

  setValues(formularioLineaBase: FormularioLineaBase): void {
    this.nivelAsociatividad.get('perteneceAsocProgrCertif')
      .setValue(formularioLineaBase.secciones.nivelAsociatividad.preguntas.perteneceAsocProgrCertif.respuesta);
    this.nivelAsociatividad.get('nombreAsociacion')
      .setValue(formularioLineaBase.secciones.nivelAsociatividad.preguntas.perteneceAsocProgrCertif.preguntas.nombreAsociacion.respuesta);
    this.nivelAsociatividad.get('cantidadMiembros')
      .setValue(formularioLineaBase.secciones.nivelAsociatividad.preguntas.perteneceAsocProgrCertif.preguntas.cantidadMiembros.respuesta);
      this.nivelAsociatividad.get('recibeBeneficios')
      .setValue(formularioLineaBase.secciones.nivelAsociatividad.preguntas.perteneceAsocProgrCertif.preguntas.recibeBeneficios.respuesta);
    this.nivelAsociatividad.get('tiposBeneficios')
      .setValue(formularioLineaBase.secciones.nivelAsociatividad.preguntas.perteneceAsocProgrCertif.preguntas.tiposBeneficios.respuesta);
    this.nivelAsociatividad.get('otroTiposBeneficios')
      .setValue(formularioLineaBase.secciones.nivelAsociatividad.preguntas.perteneceAsocProgrCertif.preguntas.tiposBeneficios.preguntas.otroTiposBeneficios.respuesta);
      this.nivelAsociatividad.get('ayudaOtraInstitucion')
      .setValue(formularioLineaBase.secciones.nivelAsociatividad.preguntas.ayudaOtraInstitucion.respuesta);
    this.nivelAsociatividad.get('nombreOtraInstitucion')
      .setValue(formularioLineaBase.secciones.nivelAsociatividad.preguntas.ayudaOtraInstitucion.preguntas.nombreOtraInstitucion.respuesta);
    this.nivelAsociatividad.get('tipoAyuda')
      .setValue(formularioLineaBase.secciones.nivelAsociatividad.preguntas.ayudaOtraInstitucion.preguntas.tipoAyuda.respuesta);
}

}
