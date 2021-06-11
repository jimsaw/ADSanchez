import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { Agricultor } from 'src/app/interfaces/agricultor';
import { ColumnInfo } from 'src/app/interfaces/columnInfo';
import { AgricultorService } from 'src/app/modules/core/services/agricultor/agricultor.service';
import { DataTableComponent } from 'src/app/modules/shared/data-table/data-table.component';
import { EditAgricultorDialogComponent } from '../edit-agricultor-dialog/edit-agricultor-dialog.component';

@Component({
  selector: 'app-agricultores',
  templateUrl: './agricultores.component.html',
  styleUrls: ['./agricultores.component.css']
})
export class AgricultoresComponent implements OnInit {

  selectedItem: Agricultor;
  // columnsInfo: ColumnInfo[];
  isTableLoading: boolean = true;
  data: Agricultor[] = [];
  dataSubscription: Subscription = null;

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
    private snackBar: MatSnackBar
  ) {
    // super(snackBar);
    // super.dataService = this.agricultorService;
    // super.columnsInfo = this.columnsInfo;
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.dataSubscription?.unsubscribe();
    this.dataSubscription = this.agricultorService.list().subscribe(data => {
      this.data = data;
      console.log(this.data);
      this.isTableLoading = false;
      console.log(this.isTableLoading);
    });
  }

  onItemSelected(event: any): void {
    console.log(event);
    this.editAgricultorDialog.agricultor = event;
    this.editAgricultorDialog.openDialog();
  }

  onAddClicked(): void {
    this.editAgricultorDialog.openDialog();
  }

  async onTrashCanClicked(row): Promise<void> {
    console.log(row);
    // const result = await this.deleteConfirmationDialog.openDialog().toPromise();
    await this.deleteData(row);
  }

  async deleteData(item: Agricultor): Promise<void> {
    try {
      const message = await this.agricultorService.delete(item);
      this.snackBar.open(message, 'Cerrar', {
        duration: 5000,
      });
    } catch (e) {
      this.snackBar.open(e, 'Cerrar', {
        duration: 5000,
      });
    }
  }

}
