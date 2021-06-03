import { Component, OnInit, ViewChild } from '@angular/core';
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

  isLoading: boolean = false;
  
  ColumnMode = ColumnMode;

  agricultores: Agricultor[] = [];

  selectedAgricultor: Agricultor;

  isTableLoading: boolean = true;
  agricultoresSubscribe: Subscription = null;
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

  get agricultoresStringMap(): any[] {
    const agricultoresStringMap = [];
    this.agricultores.forEach(value => {
      agricultoresStringMap.push(this.agricultorService.toMap(value));
    });
    return agricultoresStringMap;
  }

  @ViewChild(EditAgricultorDialogComponent) editAgricultorDialog: EditAgricultorDialogComponent;
  // @ViewChild(DeleteConfirmationDialogComponent) deleteConfirmationDialog: DeleteConfirmationDialogComponent;

  constructor(
    private agricultorService: AgricultorService
  ) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    if (this.agricultoresSubscribe !== null) {
      this.agricultoresSubscribe.unsubscribe();
    }
    this.agricultoresSubscribe = this.agricultorService.getAgricultores().subscribe(agricultores => {
      console.log(agricultores);
      this.agricultores = agricultores;
      this.isTableLoading = false;
    });
  }

  onRecordSelected(event): void {
    this.editAgricultorDialog.agricultor = this.getAgricultorFromId(event.codigo);
    this.editAgricultorDialog.openDialog();
  }

  private getAgricultorFromId(id: string): Agricultor {
    for (const agri of this.agricultores) {
      if (agri.codigo === id) {
        return agri;
      }
    }
    return null;
  }

  onTrashCanClicked(row): void {
    console.log(row);
    // const result = await this.deleteConfirmationDialog.openDialog().toPromise();
    this.deleteAgricultor(row);
  }

  deleteAgricultor(agricultor: Agricultor): void {
    this.isLoading = true;
    this.agricultorService.deleteAgricultor(agricultor)
      .then(() => {
        console.log("AGRICULTOR ELIMINADO");
        this.isLoading = false;
      })
      .catch((e) => console.log(e));
  }

  createAgricultor(): void {
    console.log("Create new user");
  }

}
