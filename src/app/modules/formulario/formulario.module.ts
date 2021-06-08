import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioRoutingModule } from './formulario-routing.module';
import { LineaBaseComponent } from './components/linea-base/linea-base.component';
import { VerificacionComponent } from './components/verificacion/verificacion.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InformacionFincaComponent } from './components/sections/informacion-finca/informacion-finca.component';
import { HectareajeComponent } from './components/sections/hectareaje/hectareaje.component';
import { CacaoCNNComponent } from './components/sections/cacao-cnn/cacao-cnn.component';
import { CacaoNacionalComponent } from './components/sections/cacao-nacional/cacao-nacional.component';
import { CacaoNacionalNuevosClonesComponent } from './components/sections/cacao-nacional-nuevos-clones/cacao-nacional-nuevos-clones.component';
import { OrigenPlantasComponent } from './components/sections/origen-plantas/origen-plantas.component';
import { InformacionFamiliaComponent } from './components/sections/informacion-familia/informacion-familia.component';
import { PracticasAgricolasComponent } from './components/sections/practicas-agricolas/practicas-agricolas.component';
import { SaludSeguridadOcupacionalComponent } from './components/sections/salud-seguridad-ocupacional/salud-seguridad-ocupacional.component';
import { CosechaComponent } from './components/sections/cosecha/cosecha.component';
import { VentaComponent } from './components/sections/venta/venta.component';
import { NivelAsociatividadComponent } from './components/sections/nivel-asociatividad/nivel-asociatividad.component';
import { CondicionesLaboralesComponent } from './components/sections/condiciones-laborales/condiciones-laborales.component';
import { ServiciosBasicosComponent } from './components/sections/servicios-basicos/servicios-basicos.component';
import { ConservacionRecursosManejoDesechosComponent } from './components/sections/conservacion-recursos-manejo-desechos/conservacion-recursos-manejo-desechos.component';
import { IncrementarProductividadComponent } from './components/sections/incrementar-productividad/incrementar-productividad.component';
import { MejorarCalidadCacaoComponent } from './components/sections/mejorar-calidad-cacao/mejorar-calidad-cacao.component';
import { DiversificacionIngresosComponent } from './components/sections/diversificacion-ingresos/diversificacion-ingresos.component';
import { PreguntasAdicionalesComponent } from './components/sections/preguntas-adicionales/preguntas-adicionales.component';
import { SharedModule } from '../shared/shared.module';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { DatosFincaComponent } from './components/datos-finca/datos-finca.component';
import { InjertacionComponent } from './components/injertacion/injertacion.component';
import { ManejoSueloComponent } from './components/manejo-suelo/manejo-suelo.component';

@NgModule({
  declarations: [
    LineaBaseComponent,
    VerificacionComponent,
    InformacionFincaComponent,
    HectareajeComponent,
    CacaoCNNComponent,
    CacaoNacionalComponent,
    CacaoNacionalNuevosClonesComponent, 
    OrigenPlantasComponent,
    InformacionFamiliaComponent,
    PracticasAgricolasComponent,
    SaludSeguridadOcupacionalComponent,
    CosechaComponent,
    VentaComponent,
    NivelAsociatividadComponent,
    CondicionesLaboralesComponent,
    ServiciosBasicosComponent,
    ConservacionRecursosManejoDesechosComponent,
    IncrementarProductividadComponent,
    MejorarCalidadCacaoComponent,
    DiversificacionIngresosComponent,
    PreguntasAdicionalesComponent,
    FormulariosComponent,
    DatosFincaComponent,
    InjertacionComponent,
    ManejoSueloComponent
  ],
  imports: [
    CommonModule,
    FormularioRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class FormularioModule { }
