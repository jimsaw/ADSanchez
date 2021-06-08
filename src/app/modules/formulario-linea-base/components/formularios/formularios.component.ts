import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ColumnInfo } from 'src/app/interfaces/columnInfo';
import { Formulario } from 'src/app/interfaces/formulario';
import { FormularioLineaBaseService } from 'src/app/modules/core/services/formularioLineaBase/formulario-linea-base.service';
import { DataTableComponent } from 'src/app/modules/shared/data-table/data-table.component';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent extends DataTableComponent<Formulario> implements OnInit {

  columnsInfo: ColumnInfo[] = [
    {
      name: "ID",
      prop: "id"
    },
    {
      name: "Agricultor",
      prop: "agricultor"
    },
    {
      name: "Fecha",
      prop: "fecha"
    },
    {
      name: "Acciones",
      prop: "nombre"
    },
  ];
  
  // @ViewChild(EditAgricultorDialogComponent) editAgricultorDialog: EditAgricultorDialogComponent;
  // @ViewChild(DeleteConfirmationDialogComponent) deleteConfirmationDialog: DeleteConfirmationDialogComponent;

  constructor(
    private formularioService: FormularioLineaBaseService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    super(snackBar);
    this.dataService = this.formularioService;
  }

  onItemSelected(event: any): void {
    console.log(event);
  }

  onAddClicked(): void {
    this.router.navigate(['inicio', 'formulariosLineaBase', 'create']);
  }

}
