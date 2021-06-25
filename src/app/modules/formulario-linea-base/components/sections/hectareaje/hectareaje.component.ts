import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioLineaBase } from 'src/app/interfaces/formularioLineaBase';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-hectareaje',
  templateUrl: './hectareaje.component.html',
  styleUrls: ['./hectareaje.component.css']
})
export class HectareajeComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  public hectareaje: FormGroup;

  hectareajeTipoTerreno: string[] = [];
  hectareajeCultivoCacao: string[] = [];
  hectareajeAsociadoConTiene: string[] = [];
  hectareajeDistanciaPlantas: string[] = [];
  hectareajeTipoUbicacionZona: string[] = [];

  otrosAsociados: string[] = [];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.hectareaje = this.formBuilder.group({
      dimensionTotalFinca: new FormControl(''),
      terreno: new FormControl(''),
      cultivoCacao: new FormControl(''),
      asociadoConTiene: new FormControl(''),
      otrosEspecifique: new FormControl(''),
      areaNetaCacao: new FormControl(''),
      distanciaPlantas: new FormControl(''),
      plantasXHectareas: new FormControl(''),
      tipoUbicacionZona: new FormControl('')
    });
   }

  ngOnInit(): void {
    this.hectareajeTipoTerreno = environment.constantes.formularioLineaBase.hectareajeTipoTerreno;
    this.hectareajeCultivoCacao = environment.constantes.formularioLineaBase.hectareajeCultivoCacao;
    this.hectareajeAsociadoConTiene = environment.constantes.formularioLineaBase.hectareajeAsociadoConTiene;
    this.hectareajeDistanciaPlantas = environment.constantes.formularioLineaBase.hectareajeDistanciaPlantas;
    this.hectareajeTipoUbicacionZona = environment.constantes.formularioLineaBase.hectareajeTipoUbicacionZona;
  }

  onSubmit() {
  }

  otroSelected(): boolean {
    const otrosSelected = this.hectareaje.get('asociadoConTiene').value;
    return otrosSelected.includes('OTRO');
  }

  get seccion(): any {
    return {
      preguntas: {
        dimensionTotalFinca: {
          respuesta: this.hectareaje.value.dimensionTotalFinca
        },
        terreno: {
          respuesta: this.hectareaje.value.terreno
        },
        cultivoCacao: {
          respuesta: this.hectareaje.value.cultivoCacao,
          preguntas: {
            asociadoConTiene: {
              respuesta: this.hectareaje.value.asociadoConTiene,
              preguntas: {
                otrosEspecifique: {
                  respuesta: this.hectareaje.value.otrosEspecifique
                }
              }
            }
          }
        },
        areaNetaCacao: {
          respuesta: this.hectareaje.value.areaNetaCacao
        },
        distanciaPlantas: {
          respuesta: this.hectareaje.value.distanciaPlantas
        },
        plantasXHectareas: {
          respuesta: this.hectareaje.value.plantasXHectareas
        },
        tipoUbicacionZona: {
          respuesta: this.hectareaje.value.tipoUbicacionZona
        }
      }
    };
  }

  setValues(formularioLineaBase: FormularioLineaBase): void {
    this.hectareaje.get('dimensionTotalFinca')
      .setValue(formularioLineaBase.secciones.hectareaje.preguntas.dimensionTotalFinca.respuesta);
    this.hectareaje.get('terreno')
      .setValue(formularioLineaBase.secciones.hectareaje.preguntas.terreno.respuesta);
    this.hectareaje.get('cultivoCacao')
      .setValue(formularioLineaBase.secciones.hectareaje.preguntas.cultivoCacao.respuesta);
    this.hectareaje.get('asociadoConTiene')
      .setValue(formularioLineaBase.secciones.hectareaje.preguntas.cultivoCacao.preguntas.asociadoConTiene.respuesta);
    this.hectareaje.get('otrosEspecifique')
      .setValue(formularioLineaBase.secciones.hectareaje.preguntas.cultivoCacao.preguntas.asociadoConTiene.preguntas.otrosEspecifique.respuesta);
    this.hectareaje.get('areaNetaCacao')
      .setValue(formularioLineaBase.secciones.hectareaje.preguntas.areaNetaCacao.respuesta);
    this.hectareaje.get('distanciaPlantas')
      .setValue(formularioLineaBase.secciones.hectareaje.preguntas.distanciaPlantas.respuesta);
    this.hectareaje.get('plantasXHectareas')
      .setValue(formularioLineaBase.secciones.hectareaje.preguntas.plantasXHectareas.respuesta);
    this.hectareaje.get('tipoUbicacionZona')
      .setValue(formularioLineaBase.secciones.hectareaje.preguntas.tipoUbicacionZona.respuesta);
  }

}
