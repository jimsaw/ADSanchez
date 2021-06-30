import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgricultorService } from './services/agricultor/agricultor.service';
import { AuthService } from './services/auth/auth.service';
import { KeymapperService } from './services/keymapper/keymapper.service';
import { AuthGuard } from './guards/auth/auth.guard';
import { FormularioLineaBaseService } from './services/formularioLineaBase/formulario-linea-base.service';
import { ExportacionesService } from './services/exportaciones/exportaciones.service';
import { ImportacionesService } from './services/importaciones/importaciones.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [AgricultorService, AuthService, FormularioLineaBaseService, KeymapperService, AuthGuard, ExportacionesService, ImportacionesService]
})
export class CoreModule { }
