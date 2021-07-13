import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { VerificacionComponent } from './components/verificacion/verificacion.component';
import { DatosFincaComponent } from './components/sections/datos-finca/datos-finca.component';
import { InjertacionComponent } from './components/sections/injertacion/injertacion.component';
import { ManejoSueloComponent } from './components/sections/manejo-suelo/manejo-suelo.component';
import { FormularioVerificacionRoutingModule } from './formulario-verificacion-routing.module';
import { FertilizacionComponent } from './components/sections/fertilizacion/fertilizacion.component';
import { BodegaComponent } from './components/sections/bodega/bodega.component';
import { ControlMalezasComponent } from './components/sections/control-malezas/control-malezas.component';
import { PodaComponent } from './components/sections/poda/poda.component';
import { MIPEComponent } from './components/sections/mipe/mipe.component';
import { SaludSeguridadOcupacionalComponent } from './components/sections/salud-seguridad-ocupacional/salud-seguridad-ocupacional.component';
import { RegistrosProductorComponent } from './components/sections/registros-productor/registros-productor.component';
import { CosechaComponent } from './components/sections/cosecha/cosecha.component';
import { FermentacionComponent } from './components/sections/fermentacion/fermentacion.component';
import { SecadoComponent } from './components/sections/secado/secado.component';
import { VentaComponent } from './components/sections/venta/venta.component';
import { CondicionesLaboralesComponent } from './components/sections/condiciones-laborales/condiciones-laborales.component';
import { ConservacionAguaManejoDesechosComponent } from './components/sections/conservacion-agua-manejo-desechos/conservacion-agua-manejo-desechos.component';
import { ConservacionSuelosBiodiversidadComponent } from './components/sections/conservacion-suelos-biodiversidad/conservacion-suelos-biodiversidad.component';
import { ProteccionAreasRibereniasComponent } from './components/sections/proteccion-areas-riberenias/proteccion-areas-riberenias.component';
import { ProteccionAreasAltoValorConservacionComponent } from './components/sections/proteccion-areas-alto-valor-conservacion/proteccion-areas-alto-valor-conservacion.component';
import { DiversificacionIngresosComponent } from './components/sections/diversificacion-ingresos/diversificacion-ingresos.component';
import { CapacitacionComponent } from './components/sections/capacitacion/capacitacion.component';
import { CapacitacionesBeneficioProgramaComponent } from './components/sections/capacitaciones-beneficio-programa/capacitaciones-beneficio-programa.component';
import { IncentivosComponent } from './components/sections/incentivos/incentivos.component';
import { AmbientalComponent } from './components/sections/ambiental/ambiental.component';
import { InsumosComponent } from './components/sections/insumos/insumos.component';
import { MaquinariaAgricolaComponent } from './components/sections/maquinaria-agricola/maquinaria-agricola.component';
import { HerramientasComponent } from './components/sections/herramientas/herramientas.component';
import { ProyectosInversionComponent } from './components/sections/proyectos-inversion/proyectos-inversion.component';
import { CalidadPostCosechaComponent } from './components/sections/calidad-post-cosecha/calidad-post-cosecha.component';



@NgModule({
  declarations: [
    FormulariosComponent,
    VerificacionComponent,
    DatosFincaComponent,
    InjertacionComponent,
    ManejoSueloComponent,
    FertilizacionComponent,
    BodegaComponent,
    ControlMalezasComponent,
    PodaComponent,
    MIPEComponent,
    SaludSeguridadOcupacionalComponent,
    RegistrosProductorComponent,
    CosechaComponent,
    FermentacionComponent,
    SecadoComponent,
    VentaComponent,
    CondicionesLaboralesComponent,
    ConservacionAguaManejoDesechosComponent,
    ConservacionSuelosBiodiversidadComponent,
    ProteccionAreasRibereniasComponent,
    ProteccionAreasAltoValorConservacionComponent,
    DiversificacionIngresosComponent,
    CapacitacionComponent,
    CapacitacionesBeneficioProgramaComponent,
    IncentivosComponent,
    AmbientalComponent,
    InsumosComponent,
    MaquinariaAgricolaComponent,
    HerramientasComponent,
    ProyectosInversionComponent,
    CalidadPostCosechaComponent
  ],
  imports: [
    CommonModule,
    FormularioVerificacionRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxSpinnerModule
  ]
})
export class FormularioVerificacionModule { }
