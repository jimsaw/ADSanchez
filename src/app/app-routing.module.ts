import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layouts/applayout/applayout.component';
import { AuthenticationLayoutComponent } from './layouts/authentication-layout/authentication-layout.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { AuthGuard } from './modules/core/guards/auth/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  {
    path: 'inicio',
    component: AppLayoutComponent,
    //canActivate: [AuthGuard],
    data: { navbar: true },
    children: [
      {
        path: 'formularios',
        //: [AuthGuard],
        loadChildren: () => import('./modules/formulario/formulario.module').then(m => m.FormularioModule)
      },
      {
        path: 'agricultores',
        //canActivate: [AuthGuard],
        loadChildren: () => import('./modules/agricultor/agricultor.module').then(m => m.AgricultorModule)
      },
      {
        path: 'registroTecnicos',
        //canActivate: [AuthGuard],
        component: BlankComponent
      },
      {
        path: 'logout',
        component: BlankComponent
      }
    ]
  },
  {
    path: 'auth',
    component: AuthenticationLayoutComponent,
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
  },
  { path: "**", redirectTo: 'auth' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
