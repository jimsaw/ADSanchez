import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { MatCardModule } from '@angular/material/card';
import { AuthComponent } from './page/auth.component';
import { MaterialModule } from '../material/material.module';
import { LogInComponent } from './components/login/log-in.component';

@NgModule({
  declarations: [
    AuthComponent,
    LogInComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatCardModule,
    MaterialModule
  ],
})
export class AuthModule { }
