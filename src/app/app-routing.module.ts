import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layouts/applayout/applayout.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { AgricultorComponent } from './modules/agricultor/page/agricultor.component';
import { AuthModule } from './modules/auth/auth.module';
import { AuthComponent } from './modules/auth/page/auth.component';
import { FormularioComponent } from './modules/formulario/page/formulario.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  {
    path: 'inicio',
    component: AppLayoutComponent,
    data: { navbar: true },
    children: [
      {
        path: 'formularios',
        //loadChildren: FormularioComponent, // Revisar
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
      }
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
  },
  { path: "**", redirectTo: 'auth' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
