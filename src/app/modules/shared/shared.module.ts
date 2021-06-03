import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MaterialTableComponent } from './material-table/material-table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';



@NgModule({
  declarations: [
    PageNotFoundComponent,
    MaterialTableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgxDatatableModule,
  ],
  exports: [
    MaterialTableComponent
  ]
})
export class SharedModule { }
