import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { VerificacionComponent } from './components/verificacion/verificacion.component';
import { DatosFincaComponent } from './components/sections/datos-finca/datos-finca.component';
import { InjertacionComponent } from './components/sections/injertacion/injertacion.component';
import { ManejoSueloComponent } from './components/sections/manejo-suelo/manejo-suelo.component';
import { FormularioVerificacionRoutingModule } from './formulario-verificacion-routing.module';



@NgModule({
  declarations: [
    FormulariosComponent,
    VerificacionComponent,
    DatosFincaComponent,
    InjertacionComponent,
    ManejoSueloComponent
  ],
  imports: [
    CommonModule,
    FormularioVerificacionRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class FormularioVerificacionModule { }
