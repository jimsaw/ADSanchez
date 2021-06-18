import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioLineaBase } from 'src/app/interfaces/formularioLineaBase';

@Component({
  selector: 'app-condiciones-laborales',
  templateUrl: './condiciones-laborales.component.html',
  styleUrls: ['./condiciones-laborales.component.css']
})
export class CondicionesLaboralesComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  condicionesLaborales: FormGroup;

  tiposTrabajador: string[] = ["PERMANENTE", "OCASIONAL"];

  opciones: string[] = ["SI", "NO"];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.condicionesLaborales = this.formBuilder.group({
      contrataTrabajadores: new FormControl(''),
      cantidadTrabajadores: new FormControl(''),
      areaInicialContrato: new FormControl(''),
      tipoContratoTrabajo: new FormControl(''),
      contrataMenoresEdad: new FormControl(''),
      poseePermiso: new FormControl(''),
      baseContratoAgricola: new FormControl('')
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  hayContratados() {
    const hayContratados = this.condicionesLaborales.get('contrataTrabajadores').value;
    return hayContratados === 'SI';
  }

  contrataMenores() {
    const contrataMenores = this.condicionesLaborales.get('contrataMenoresEdad').value;
    return contrataMenores === 'SI';
  }

  get seccion(): any {
    return {
      preguntas: {
        contrataTrabajadores: {
          respuesta: this.condicionesLaborales.value.contrataTrabajadores,
          preguntas: {
            cantidadTrabajadores: {
              respuesta: this.condicionesLaborales.value.cantidadTrabajadores
            }
          }
        },
        areaInicialContrato: {
          respuesta: this.condicionesLaborales.value.areaInicialContrato
        },
        tipoContratoTrabajo: {
          respuesta: this.condicionesLaborales.value.tipoContratoTrabajo
        },
        contrataMenoresEdad: {
          respuesta: this.condicionesLaborales.value.contrataMenoresEdad,
          preguntas: {
            poseePermiso: {
              respuesta: this.condicionesLaborales.value.poseePermiso
            }
          }
        },
        baseContratoAgricola: {
          respuesta: this.condicionesLaborales.value.baseContratoAgricola
        }
      }
    };
  }

  setValues(formularioLineaBase: FormularioLineaBase): void {
    this.condicionesLaborales.get('contrataTrabajadores')
      .setValue(formularioLineaBase.secciones.condicionesLaborales.preguntas.contrataTrabajadores.respuesta);
    this.condicionesLaborales.get('cantidadTrabajadores')
      .setValue(formularioLineaBase.secciones.condicionesLaborales.preguntas.contrataTrabajadores.preguntas.cantidadTrabajadores.respuesta);
    this.condicionesLaborales.get('areaInicialContrato')
      .setValue(formularioLineaBase.secciones.condicionesLaborales.preguntas.areaInicialContrato.respuesta);
    this.condicionesLaborales.get('tipoContratoTrabajo')
      .setValue(formularioLineaBase.secciones.condicionesLaborales.preguntas.tipoContratoTrabajo.respuesta);
    this.condicionesLaborales.get('contrataMenoresEdad')
      .setValue(formularioLineaBase.secciones.condicionesLaborales.preguntas.contrataMenoresEdad.respuesta);
    this.condicionesLaborales.get('poseePermiso')
      .setValue(formularioLineaBase.secciones.condicionesLaborales.preguntas.contrataMenoresEdad.preguntas.poseePermiso.respuesta);
    this.condicionesLaborales.get('baseContratoAgricola')
      .setValue(formularioLineaBase.secciones.condicionesLaborales.preguntas.baseContratoAgricola.respuesta);
}

}
