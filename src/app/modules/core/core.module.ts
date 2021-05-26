import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgricultorService } from './services/agricultor/agricultor.service';
import { AuthService } from './services/auth/auth.service';
import { FormularioService } from './services/formulario/formulario.service';
import { KeymapperService } from './services/keymapper/keymapper.service';
import { AuthGuard } from './guards/auth/auth.guard';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [AgricultorService, AuthService, FormularioService, KeymapperService, AuthGuard]
})
export class CoreModule { }
