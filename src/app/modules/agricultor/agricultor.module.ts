import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgricultorRoutingModule } from './agricultor-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { AgricultorComponent } from './page/agricultor.component';
import { SharedModule } from '../shared/shared.module';
import { AgricultoresComponent } from './components/agricultores/agricultores.component';
import { EditAgricultorDialogComponent } from './components/edit-agricultor-dialog/edit-agricultor-dialog.component';
import { EditAgricultorBodyComponent } from './components/edit-agricultor-body/edit-agricultor-body.component';


@NgModule({
  declarations: [
    AgricultorComponent,
    AgricultoresComponent,
    EditAgricultorDialogComponent,
    EditAgricultorBodyComponent
  ],
  imports: [
    CommonModule,
    AgricultorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule
  ],
})
export class AgricultorModule { }
