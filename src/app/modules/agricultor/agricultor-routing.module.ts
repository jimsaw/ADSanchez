import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgricultorComponent } from './page/agricultor.component';

const routes: Routes = [
  {
    path: '',
    component: AgricultorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgricultorRoutingModule { }
