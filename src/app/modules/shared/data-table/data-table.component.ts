import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { ColumnInfo } from 'src/app/interfaces/columnInfo';
import { IDatabase } from 'src/app/interfaces/database';
import { ExportacionesService } from '../../core/services/exportaciones/exportaciones.service';
import { MaterialTableComponent } from '../material-table/material-table.component';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent<T> implements OnInit {

  selectedItem: T;
  columnsInfo: ColumnInfo[];
  isTableLoading: boolean = true;
  data: T[] = [];
  dataSubscription: Subscription = null;

  dataService;

  @ViewChild(MaterialTableComponent) materialTableComponent: MaterialTableComponent;

  constructor(
    private snackBarObj: MatSnackBar,
    private spinnerObj: NgxSpinnerService,
    private exportacionServiceObj: ExportacionesService
  ) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.dataSubscription?.unsubscribe();
    this.dataSubscription = this.dataService.list().subscribe(data => {
      this.materialTableComponent.setData(data, false);
    });
  }

  onItemSelected(event: any): void {}

  onAddClicked(): void {}

  async onTrashCanClicked(row): Promise<void> {
    // const result = await this.deleteConfirmationDialog.openDialog().toPromise();
    await this.deleteData(row);
  }

  async onExportClicked(row): Promise<void> {
    await this.exportData(row);
  }

  async deleteData(item: T): Promise<void> {
    try {
      const message = await this.dataService.delete(item);
      this.snackBarObj.open(message, 'Cerrar', {
        duration: 5000,
      });
    } catch (e) {
      this.snackBarObj.open(e, 'Cerrar', {
        duration: 5000,
      });
    }
  }

  async exportData(item: T): Promise<void> {
    try {
      const result = await this.dataService.export(item["id"]);
      this.snackBarObj.open('Formulario exportado con éxito', 'Cerrar', {
        duration: 5000,
      });
    } catch (e) {
      this.snackBarObj.open(e, 'Cerrar', {
        duration: 5000,
      });
    }
  }

  protected canBeExported() {}
}
