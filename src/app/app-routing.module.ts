import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layouts/applayout/applayout.component';
import { AuthenticationLayoutComponent } from './layouts/authentication-layout/authentication-layout.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { AuthGuard } from './modules/core/guards/auth/auth.guard';
import { PageNotFoundComponent } from './modules/shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  {
    path: 'inicio',
    component: AppLayoutComponent,
    canActivate: [AuthGuard],
    data: { navbar: true },
    children: [
      {
        path: 'formularios',
        loadChildren: () => import('./modules/formulario/formulario.module').then(m => m.FormularioModule)
      },
      {
        path: 'agricultores',
        loadChildren: () => import('./modules/agricultor/agricultor.module').then(m => m.AgricultorModule)
      },
      {
        path: 'registroTecnicos',
        component: BlankComponent
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
  { path: "**",
    component: PageNotFoundComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
