import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { MisReservasComponent } from './pages/mis-reservas/mis-reservas.component';
import { ComponentsModule } from '../components/components.module';
import { MisMultasComponent } from './pages/mis-multas/mis-multas.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';
import { CardsForUserComponent } from './components/cards-for-user/cards-for-user.component';


@NgModule({
  declarations: [
    MisReservasComponent,
    MisMultasComponent,
    CardsForUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UsuarioRoutingModule,
    ComponentsModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule
  ],
})
export class UsuarioModule {}
