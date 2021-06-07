import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { MaterialTableComponent } from './material-table/material-table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DataTableComponent } from './data-table/data-table.component';



@NgModule({
  declarations: [
    MaterialTableComponent,
    DataTableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgxDatatableModule,
  ],
  exports: [
    MaterialTableComponent,
    DataTableComponent
  ]
})
export class SharedModule { }
