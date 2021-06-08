import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgricultoresComponent } from './components/agricultores/agricultores.component';

const routes: Routes = [
  {
    path: '',
    component: AgricultoresComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgricultorRoutingModule { }
