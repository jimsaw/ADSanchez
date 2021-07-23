import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { MaterialTableComponent } from './material-table/material-table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DataTableComponent } from './data-table/data-table.component';
import { HighlightDirective } from './directives/highlight.directive';



@NgModule({
  declarations: [
    MaterialTableComponent,
    DataTableComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgxDatatableModule
  ],
  exports: [
    MaterialTableComponent,
    DataTableComponent,
    HighlightDirective
  ]
})
export class SharedModule { }
