import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LineaBaseComponent } from './components/linea-base/linea-base.component';
import { VerificacionComponent } from './components/verificacion/verificacion.component';
import { FormularioComponent } from './page/formulario.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'lineaBase',
        component: LineaBaseComponent
      },
      {
        path: 'verificacion',
        component: VerificacionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormularioRoutingModule { }
