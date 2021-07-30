import { Injectable } from '@angular/core';
import { FormularioType } from 'src/app/interfaces/formulario';
import { ImportacionLineaBaseService } from './importacion-linea-base.service';
import { ImportacionVerificacionService } from './importacion-verificacion.service';

@Injectable({
  providedIn: 'root'
})
export class ImportacionesService {
  csvRecords: any[] = [];

  constructor(
    private importacionLineaBaseService: ImportacionLineaBaseService,
    private importacionVerificacionService: ImportacionVerificacionService
  ) { }

  async importFormulario(file: any, header: boolean, delimeter: string, formularioType: FormularioType): Promise<void> {
    switch (formularioType) {
      case FormularioType.formularioLineaBase:
        await this.importacionLineaBaseService.importAllFormularios(file, header, delimeter);
        break;
      case FormularioType.formularioVerificacion:
        await this.importacionVerificacionService.importAllFormularios(file, header, delimeter);
        break;
      default:
        console.log("NO EXISTE TIPO");
        break;
    }
  }

}
