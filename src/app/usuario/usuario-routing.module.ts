import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MisReservasComponent } from './pages/mis-reservas/mis-reservas.component';
import { MisMultasComponent } from './pages/mis-multas/mis-multas.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: MisReservasComponent },
  { path: 'reservas', component: MisReservasComponent },
  { path: 'multas', component: MisMultasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioRoutingModule {}
