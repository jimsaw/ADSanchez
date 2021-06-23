import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExportacionesRoutingModule } from './exportaciones-routing.module';
import { ExportacionesCSVComponent } from './components/exportaciones-csv/exportaciones-csv.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [ExportacionesCSVComponent],
  imports: [
    NgxSpinnerModule,
    CommonModule,
    ExportacionesRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ExportacionesModule { }
