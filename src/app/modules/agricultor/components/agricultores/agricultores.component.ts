import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { Agricultor } from 'src/app/interfaces/agricultor';
import { ColumnInfo } from 'src/app/interfaces/columnInfo';
import { AgricultorService } from 'src/app/modules/core/services/agricultor/agricultor.service';
import { ExportacionesService } from 'src/app/modules/core/services/exportaciones/exportaciones.service';
import { DataTableComponent } from 'src/app/modules/shared/data-table/data-table.component';
import { MaterialTableComponent } from 'src/app/modules/shared/material-table/material-table.component';
import { EditAgricultorDialogComponent } from '../edit-agricultor-dialog/edit-agricultor-dialog.component';

@Component({
  selector: 'app-agricultores',
  templateUrl: './agricultores.component.html',
  styleUrls: ['./agricultores.component.css']
})
export class AgricultoresComponent extends DataTableComponent<Agricultor> implements OnInit {

  columnsInfo: ColumnInfo[] = [
    {
      name: "Código",
      prop: "id"
    },
    {
      name: "Cédula",
      prop: "cedula"
    },
    {
      name: "Nombre",
      prop: "nombre"
    },
    {
      name: "Acciones",
      prop: "nombre"
    },
  ];

  @ViewChild(EditAgricultorDialogComponent) editAgricultorDialog: EditAgricultorDialogComponent;
  // @ViewChild(DeleteConfirmationDialogComponent) deleteConfirmationDialog: DeleteConfirmationDialogComponent;

  constructor(
    private agricultorService: AgricultorService,
    private snackBar: MatSnackBar,
    private spinner: NgxSpinnerService,
    private exportacionService: ExportacionesService
  ) {
    super(snackBar, spinner, exportacionService);
    super.dataService = this.agricultorService;
    super.columnsInfo = this.columnsInfo;
  }

  onItemSelected(event: any): void {
    this.editAgricultorDialog.agricultor = event;
    this.editAgricultorDialog.openDialog();
  }

  onAddClicked(): void {
    this.editAgricultorDialog.openDialog();
  }

}
