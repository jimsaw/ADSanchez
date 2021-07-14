import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioVerificacion } from 'src/app/interfaces/formularioVerificacion';
import { AmbientalComponent } from '../ambiental/ambiental.component';
import { CalidadPostCosechaComponent } from '../calidad-post-cosecha/calidad-post-cosecha.component';
import { HerramientasComponent } from '../herramientas/herramientas.component';
import { InsumosComponent } from '../insumos/insumos.component';
import { MaquinariaAgricolaComponent } from '../maquinaria-agricola/maquinaria-agricola.component';
import { ProyectosInversionComponent } from '../proyectos-inversion/proyectos-inversion.component';

@Component({
  selector: 'app-incentivos',
  templateUrl: './incentivos.component.html',
  styleUrls: ['./incentivos.component.css']
})
export class IncentivosComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  incentivos: FormGroup;

  @ViewChild(AmbientalComponent) ambientalComponent: AmbientalComponent;
  @ViewChild(InsumosComponent) insumosComponent: InsumosComponent;
  @ViewChild(MaquinariaAgricolaComponent) maquinariaAgricolaComponent: MaquinariaAgricolaComponent;
  @ViewChild(HerramientasComponent) herramientasComponent: HerramientasComponent;
  @ViewChild(ProyectosInversionComponent) proyectosInversionComponent: ProyectosInversionComponent;
  @ViewChild(CalidadPostCosechaComponent) calidadPostCosechaComponent: CalidadPostCosechaComponent;

  constructor(private formBuilder: FormBuilder) {
    this.incentivos = this.formBuilder.group({
      necesidadesDetectadasFinca: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  get seccion(): any {
    return {
      preguntas: {
        necesidadesDetectadasFinca: {
          respuesta: this.incentivos.value.necesidadesDetectadasFinca
        }
      },
      secciones: {
        ambiental: this.ambientalComponent.seccion,
        insumos: this.insumosComponent.seccion,
        maquinariaAgricola: this.maquinariaAgricolaComponent.seccion,
        herramientas: this.herramientasComponent.seccion,
        proyectosInversion: this.proyectosInversionComponent.seccion,
        calidadPostCosecha: this.calidadPostCosechaComponent.seccion
      }
    };
  }

  setValues(formularioVerificacion: FormularioVerificacion): void {
    this.incentivos.get('necesidadesDetectadasFinca')
      .setValue(formularioVerificacion.secciones.capacitacionesBeneficioPrograma.secciones.incentivos.preguntas.necesidadesDetectadasFinca.respuesta);
    this.ambientalComponent.setValues(formularioVerificacion);
    this.insumosComponent.setValues(formularioVerificacion);
    this.maquinariaAgricolaComponent.setValues(formularioVerificacion);
    this.herramientasComponent.setValues(formularioVerificacion);
    this.proyectosInversionComponent.setValues(formularioVerificacion);
    this.calidadPostCosechaComponent.setValues(formularioVerificacion);
  }

}
