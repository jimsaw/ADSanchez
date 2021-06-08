import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioRoutingModule } from './formulario-routing.module';
import { FormularioComponent } from './page/formulario.component';
import { LineaBaseComponent } from './components/linea-base/linea-base.component';
import { VerificacionComponent } from './components/verificacion/verificacion.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InformacionFincaComponent } from './components/informacion-finca/informacion-finca.component';
import { HectareajeComponent } from './components/hectareaje/hectareaje.component';
import { CacaoCNNComponent } from './components/cacao-cnn/cacao-cnn.component';
import { CacaoNacionalComponent } from './components/cacao-nacional/cacao-nacional.component';
import { CacaoNacionalNuevosClonesComponent } from './components/cacao-nacional-nuevos-clones/cacao-nacional-nuevos-clones.component';
import { OrigenPlantasComponent } from './components/origen-plantas/origen-plantas.component';
import { InformacionFamiliaComponent } from './components/informacion-familia/informacion-familia.component';
import { PracticasAgricolasComponent } from './components/practicas-agricolas/practicas-agricolas.component';
import { SaludSeguridadOcupacionalComponent } from './components/salud-seguridad-ocupacional/salud-seguridad-ocupacional.component';
import { CosechaComponent } from './components/cosecha/cosecha.component';
import { VentaComponent } from './components/venta/venta.component';
import { NivelAsociatividadComponent } from './components/nivel-asociatividad/nivel-asociatividad.component';
import { CondicionesLaboralesComponent } from './components/condiciones-laborales/condiciones-laborales.component';
import { ServiciosBasicosComponent } from './components/servicios-basicos/servicios-basicos.component';
import { ConservacionRecursosManejoDesechosComponent } from './components/conservacion-recursos-manejo-desechos/conservacion-recursos-manejo-desechos.component';
import { IncrementarProductividadComponent } from './components/incrementar-productividad/incrementar-productividad.component';
import { MejorarCalidadCacaoComponent } from './components/mejorar-calidad-cacao/mejorar-calidad-cacao.component';
import { DiversificacionIngresosComponent } from './components/diversificacion-ingresos/diversificacion-ingresos.component';
import { PreguntasAdicionalesComponent } from './components/preguntas-adicionales/preguntas-adicionales.component';
import { DatosFincaComponent } from './components/datos-finca/datos-finca.component';
import { InjertacionComponent } from './components/injertacion/injertacion.component';
import { ManejoSueloComponent } from './components/manejo-suelo/manejo-suelo.component';

@NgModule({
  declarations: [FormularioComponent, LineaBaseComponent, VerificacionComponent, InformacionFincaComponent, HectareajeComponent, CacaoCNNComponent, CacaoNacionalComponent, CacaoNacionalNuevosClonesComponent, OrigenPlantasComponent, InformacionFamiliaComponent, PracticasAgricolasComponent, SaludSeguridadOcupacionalComponent, CosechaComponent, VentaComponent, NivelAsociatividadComponent, CondicionesLaboralesComponent, ServiciosBasicosComponent, ConservacionRecursosManejoDesechosComponent, IncrementarProductividadComponent, MejorarCalidadCacaoComponent, DiversificacionIngresosComponent, PreguntasAdicionalesComponent, DatosFincaComponent, InjertacionComponent, ManejoSueloComponent],
  imports: [
    CommonModule,
    FormularioRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormularioModule { }
