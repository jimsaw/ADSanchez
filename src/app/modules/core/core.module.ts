import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgricultorService } from './services/agricultor/agricultor.service';
import { AuthService } from './services/auth/auth.service';
import { KeymapperService } from './services/keymapper/keymapper.service';
import { AuthGuard } from './guards/auth/auth.guard';
import { FormularioLineaBaseService } from './services/formularioLineaBase/formulario-linea-base.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [AgricultorService, AuthService, FormularioLineaBaseService, KeymapperService, AuthGuard]
})
export class CoreModule { }
