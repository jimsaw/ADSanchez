import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ExportacionesService } from 'src/app/modules/core/services/exportaciones/exportaciones.service';
import { FormularioLineaBaseService } from 'src/app/modules/core/services/formularioLineaBase/formulario-linea-base.service';

@Component({
  selector: 'app-exportaciones-csv',
  templateUrl: './exportaciones-csv.component.html',
  styleUrls: ['./exportaciones-csv.component.css']
})
export class ExportacionesCSVComponent implements OnInit {
  public formularioExportado: FormGroup;
  activador1;
  activador2;

  constructor(private exportaciones: ExportacionesService, private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService, private toastr: ToastrService, private formularioLineaBaseService: FormularioLineaBaseService) {
    this.formularioExportado = this.formBuilder.group({
      idFormulario: new FormControl(''),
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    this.spinner.show();
    this.activador1 = this.exportaciones.exportarFormularioById('formulariosLineaBase', this.formularioExportado.value.idFormulario);
    if (await this.activador1) {
      this.spinner.hide();
      this.toastr.success('Archivo Exportado Exitosamente', 'Exportación Completa', {
        positionClass: 'toast-bottom-right',
      });
    }
    this.formularioExportado.reset();
  }

  async exportAll() {
    this.spinner.show();
    this.activador2 = await this.exportaciones.exportarAllFormularios('formulariosLineaBase');
    if (await this.activador2) {
      this.spinner.hide();
      this.toastr.success('Archivo Exportado Exitosamente', 'Exportación Completa', {
        positionClass: 'toast-bottom-right',
      });
    }
    this.formularioExportado.reset();
  }

}
