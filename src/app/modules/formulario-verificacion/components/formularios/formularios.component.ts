import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ColumnInfo } from 'src/app/interfaces/columnInfo';
import { Formulario, FormularioType } from 'src/app/interfaces/formulario';
import { ExportacionesService } from 'src/app/modules/core/services/exportaciones/exportaciones.service';
import { FormularioVerificacionService } from 'src/app/modules/core/services/formularioVerificacion/formulario-verificacion.service';
import { ImportacionesService } from 'src/app/modules/core/services/importaciones/importaciones.service';
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
      name: "Técnico",
      prop: "tecnico"
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
    private spinner: NgxSpinnerService,
    private exportacionService: ExportacionesService,
    private importacionService: ImportacionesService,
    private router: Router
  ) {
    super(snackBar, spinner, exportacionService);
    this.dataService = this.formularioService;
  }

  onItemSelected(event: any): void {
    this.router.navigate(['inicio', 'formulariosVerificacion', 'create', event['id']]);
  }

  onAddClicked(): void {
    this.router.navigate(['inicio', 'formulariosVerificacion', 'create']);
  }

  exportAll(): void {
    this.formularioService.exportAll();
  }

  onImportClicked(event: any): void {
    const inputEvent = document.getElementById('csvFileUpload').click();
  }

  async import(event: any): Promise<void> {
    try {
      this.spinner.show();
      let header: boolean = false;
      const files = event.srcElement.files;
      await this.importacionService.importFormulario(files, header, ',', FormularioType.formularioVerificacion);
      this.spinner.hide();
      this.snackBar.open('Formulario de Verificación importado', 'Cerrar', {
        duration: 5000,
      });
    } catch (e) {
      this.snackBar.open(e, 'Cerrar', {
        duration: 5000,
      });
    }
  }

}
