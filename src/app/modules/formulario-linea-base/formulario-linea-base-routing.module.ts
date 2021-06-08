import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LineaBaseComponent } from './components/linea-base/linea-base.component';
import { FormulariosComponent } from './components/formularios/formularios.component';
const routes: Routes = [
  {
    path: '',
    component: FormulariosComponent,
  },
  {
    path: 'create',
    component: LineaBaseComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormularioLineaBaseRoutingModule { }