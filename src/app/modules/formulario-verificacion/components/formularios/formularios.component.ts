import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ColumnInfo } from 'src/app/interfaces/columnInfo';
import { Formulario } from 'src/app/interfaces/formulario';
import { FormularioVerificacionService } from 'src/app/modules/core/services/formularioVerificacion/formulario-verificacion.service';
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
      prop: "fechaVisita"
    },
    {
      name: "Acciones",
      prop: "nombre"
    },
  ];
  
  // @ViewChild(EditAgricultorDialogComponent) editAgricultorDialog: EditAgricultorDialogComponent;
  // @ViewChild(DeleteConfirmationDialogComponent) deleteConfirmationDialog: DeleteConfirmationDialogComponent;

  constructor(
    private formularioService: FormularioVerificacionService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    super(snackBar);
    this.dataService = this.formularioService;
  }

  onItemSelected(event: any): void {
    this.router.navigate(['inicio', 'formulariosVerificacion', 'create', event['id']]);
  }

  onAddClicked(): void {
    this.router.navigate(['inicio', 'formulariosVerificacion', 'create']);
  }

}
