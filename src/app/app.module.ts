import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgricultorModule } from './modules/agricultor/agricultor.module';
import { AuthModule } from './modules/auth/auth.module';
import { FormularioModule } from './modules/formulario/formulario.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { CoreModule } from './modules/core/core.module';
import { SharedModule } from './modules/shared/shared.module';
import { AppLayoutComponent } from './layouts/applayout/applayout.component';
import { LogInComponent } from './modules/auth/components/login/log-in.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FormularioModule,
    AgricultorModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    SharedModule,
    FormsModule,
  ],
  exports: [MaterialModule,
    AuthModule,
    FormularioModule,
    AgricultorModule,
    MaterialModule,
    SharedModule,
    FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
