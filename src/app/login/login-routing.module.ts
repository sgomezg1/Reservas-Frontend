import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SolicitudReestablecerComponent } from './pages/password/solicitud-reestablecer/solicitud-reestablecer.component';
import { RespuestaReestablecerComponent } from './pages/password/respuesta-reestablecer/respuesta-reestablecer.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegistroComponent },
  { path: 'change-password', component: SolicitudReestablecerComponent },
  { path: 'recovery-response', component: RespuestaReestablecerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
