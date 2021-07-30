import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { FormularioType } from 'src/app/interfaces/formulario';
import { ExportacionesService } from 'src/app/modules/core/services/exportaciones/exportaciones.service';
import { FormularioLineaBaseService } from 'src/app/modules/core/services/formularioLineaBase/formulario-linea-base.service';
import { FormularioVerificacionService } from 'src/app/modules/core/services/formularioVerificacion/formulario-verificacion.service';
import { ImportacionesService } from 'src/app/modules/core/services/importaciones/importaciones.service';

@Component({
  selector: 'app-exportaciones-csv',
  templateUrl: './exportaciones-csv.component.html',
  styleUrls: ['./exportaciones-csv.component.css']
})
export class ExportacionesCSVComponent implements OnInit {
  public formularioExportado: FormGroup;
  activador1;
  activador2;

  header: boolean = false;
  @ViewChild('fileImportInput') fileImportInput: any;

  constructor(
    private exportaciones: ExportacionesService,
    private formBuilder: FormBuilder,
    private importaciones: ImportacionesService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private formularioLineaBaseService: FormularioLineaBaseService,
    private formularioVerificacionService: FormularioVerificacionService
  ) {
    this.formularioExportado = this.formBuilder.group({
      idFormulario: new FormControl(''),
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    this.spinner.show();
    console.log(this.formularioExportado.value.idFormulario);
    await this.formularioVerificacionService.export(this.formularioExportado.value.idFormulario);
    this.spinner.hide();
    this.toastr.success('Archivo Exportado Exitosamente', 'Exportación Completa', {
      positionClass: 'toast-bottom-right',
    });
    this.formularioExportado.reset();
  }

  async exportAll() {
    this.spinner.show();
    this.activador2 = await this.formularioVerificacionService.exportAll();
    this.spinner.hide();
    this.toastr.success('Archivo Exportado Exitosamente', 'Exportación Completa', {
      positionClass: 'toast-bottom-right',
    });
    this.formularioExportado.reset();
  }

  fileChangeListener($event: any): void {

    const files = $event.srcElement.files;
    this.header = (this.header as unknown as string) === 'true' || this.header === true;

    this.importaciones.importFormulario(files, this.header, ',', FormularioType.formularioLineaBase);
  }

}
