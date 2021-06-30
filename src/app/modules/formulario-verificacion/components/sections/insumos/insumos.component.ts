import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioVerificacion } from 'src/app/interfaces/formularioVerificacion';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-insumos',
  templateUrl: './insumos.component.html',
  styleUrls: ['./insumos.component.css']
})
export class InsumosComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  insumos: FormGroup;

  yesNoAnswer: string[];
  estado: string[];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.insumos = this.formBuilder.group({
      estadoFertilizanteEdafico: new FormControl(''),
      estadoFertilizanteFoliar: new FormControl(''),
      necesitaFertilizanteEdafico: new FormControl(''),
      necesitaFertilizanteFoliar: new FormControl('')
    });
   }

  ngOnInit(): void {
    this.yesNoAnswer = environment.constantes.formularioVerificacion.yesNoAnswer;
    this.estado = environment.constantes.formularioVerificacion.estado;
  }

  onSubmit() {

  }

  get seccion(): any {
    return {
      preguntas: {
        estadoFertilizanteEdafico: {
          respuesta: this.insumos.value.estadoFertilizanteEdafico
        },
        estadoFertilizanteFoliar: {
          respuesta: this.insumos.value.estadoFertilizanteFoliar
        },
        necesitaFertilizanteEdafico: {
          respuesta: this.insumos.value.necesitaFertilizanteEdafico
        },
        necesitaFertilizanteFoliar: {
          respuesta: this.insumos.value.necesitaFertilizanteFoliar
        }
      }
    };
  }

  setValues(formularioVerificacion: FormularioVerificacion): void {
    const seccionesIncentivos = formularioVerificacion.secciones.capacitacionesBeneficioPrograma.secciones.incentivos.secciones;
    this.insumos.get('estadoFertilizanteEdafico')
      .setValue(seccionesIncentivos.insumos.preguntas.estadoFertilizanteEdafico.respuesta);
    this.insumos.get('estadoFertilizanteFoliar')
      .setValue(seccionesIncentivos.insumos.preguntas.estadoFertilizanteFoliar.respuesta);
    this.insumos.get('necesitaFertilizanteEdafico')
      .setValue(seccionesIncentivos.insumos.preguntas.necesitaFertilizanteEdafico.respuesta);
    this.insumos.get('necesitaFertilizanteFoliar')
      .setValue(seccionesIncentivos.insumos.preguntas.necesitaFertilizanteFoliar.respuesta);
  }

}
