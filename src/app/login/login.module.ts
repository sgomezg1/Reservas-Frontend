import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RespuestaReestablecerComponent } from './pages/password/respuesta-reestablecer/respuesta-reestablecer.component';
import { SolicitudReestablecerComponent } from './pages/password/solicitud-reestablecer/solicitud-reestablecer.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ComponentsModule } from '../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginComponent,
    RespuestaReestablecerComponent,
    SolicitudReestablecerComponent,
    RegistroComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    RouterModule
  ],
})
export class LoginModule {}
