import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgricultorModule } from './modules/agricultor/agricultor.module';
import { AuthModule } from './modules/auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { CoreModule } from './modules/core/core.module';
import { SharedModule } from './modules/shared/shared.module';
import { AppLayoutComponent } from './layouts/applayout/applayout.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationLayoutComponent } from './layouts/authentication-layout/authentication-layout.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ToastrModule } from 'ngx-toastr';
import { FormularioLineaBaseModule } from './modules/formulario-linea-base/formulario-linea-base.module';
import { FormularioVerificacionModule } from './modules/formulario-verificacion/formulario-verificacion.module';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    AuthenticationLayoutComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    AgricultorModule,
    FormularioLineaBaseModule,
    FormularioVerificacionModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    SharedModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  exports: [
    MaterialModule,
    AuthModule,
    AgricultorModule,
    MaterialModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
