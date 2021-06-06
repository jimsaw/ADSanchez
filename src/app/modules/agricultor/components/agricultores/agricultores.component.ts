import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Subscription } from 'rxjs';
import { Agricultor } from 'src/app/interfaces/agricultor';
import { ColumnInfo } from 'src/app/interfaces/columnInfo';
import { AgricultorService } from 'src/app/modules/core/services/agricultor/agricultor.service';
import { EditAgricultorDialogComponent } from '../edit-agricultor-dialog/edit-agricultor-dialog.component';

@Component({
  selector: 'app-agricultores',
  templateUrl: './agricultores.component.html',
  styleUrls: ['./agricultores.component.css']
})
export class AgricultoresComponent implements OnInit {

  selectedAgricultor: Agricultor;

  columnsInfo: ColumnInfo[] = [
    {
      name: "Cédula",
      prop: "cedula"
    },
    {
      name: "Nombre",
      prop: "nombre"
    },
    {
      name: "Código",
      prop: "codigo"
    },
    {
      name: "Acciones",
      prop: "nombre"
    },
  ];
  
  isTableLoading: boolean = true;
  agricultores: Agricultor[] = [];
  agricultoresSubscribe: Subscription = null;

  @ViewChild(EditAgricultorDialogComponent) editAgricultorDialog: EditAgricultorDialogComponent;
  // @ViewChild(DeleteConfirmationDialogComponent) deleteConfirmationDialog: DeleteConfirmationDialogComponent;

  constructor(
    private agricultorService: AgricultorService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.agricultoresSubscribe?.unsubscribe();
    this.agricultoresSubscribe = this.agricultorService.getAgricultores().subscribe(agricultores => {
      this.agricultores = agricultores;
      console.log(this.agricultores);
      this.isTableLoading = false;
    });
  }

  onAgricultorSelected(event: any): void {
    console.log(event);
    this.editAgricultorDialog.agricultor = event;
    this.editAgricultorDialog.openDialog();
  }

  async onTrashCanClicked(row): Promise<void> {
    console.log(row);
    // const result = await this.deleteConfirmationDialog.openDialog().toPromise();
    await this.deleteAgricultor(row);
  }

  async deleteAgricultor(agricultor: Agricultor): Promise<void> {
    try {
      const message = await this.agricultorService.deleteAgricultor(agricultor);
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
