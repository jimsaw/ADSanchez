import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgricultorService } from './services/agricultor/agricultor.service';
import { AuthService } from './services/auth/auth.service';
import { FormularioService } from './services/formulario/formulario.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [AgricultorService, AuthService, FormularioService]
})
export class CoreModule { }
