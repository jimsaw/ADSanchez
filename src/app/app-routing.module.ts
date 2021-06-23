import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layouts/applayout/applayout.component';
import { AuthenticationLayoutComponent } from './layouts/authentication-layout/authentication-layout.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { AuthGuard } from './modules/core/guards/auth/auth.guard';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ExportacionesCSVComponent } from './modules/exportaciones/components/exportaciones-csv/exportaciones-csv.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  {
    path: 'inicio',
    component: AppLayoutComponent,
    canActivate: [AuthGuard],
    data: { navbar: true },
    children: [
      {
        path: 'home',
        component: InicioComponent
      },
      {
        path: 'formulariosLineaBase',
        loadChildren: () => import('./modules/formulario-linea-base/formulario-linea-base.module').then(m => m.FormularioLineaBaseModule)
      },
      {
        path: 'formulariosVerificacion',
        loadChildren: () => import('./modules/formulario-verificacion/formulario-verificacion.module').then(m => m.FormularioVerificacionModule)
      },
      {
        path: 'agricultores',
        loadChildren: () => import('./modules/agricultor/agricultor.module').then(m => m.AgricultorModule)
      },
      {
        path: 'exportaciones',
        component: ExportacionesCSVComponent
      },
      {
        path: 'logout',
        component: BlankComponent
      },
      { path: "**", redirectTo: '**' }
    ]
  },
  {
    path: 'auth',
    component: AuthenticationLayoutComponent,
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
