import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { VerificacionComponent } from './components/verificacion/verificacion.component';

const routes: Routes = [
  {
    path: '',
    component: FormulariosComponent,
  },
  {
    path: 'create',
    component: VerificacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormularioVerificacionRoutingModule { }