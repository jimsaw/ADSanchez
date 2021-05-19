import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgricultorRoutingModule } from './agricultor-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { AgricultorComponent } from './page/agricultor.component';


@NgModule({
  declarations: [
    AgricultorComponent
  ],
  imports: [
    CommonModule,
    AgricultorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
})
export class AgricultorModule { }
