import { Component } from '@angular/core';
import { TITLES } from 'src/app/constants/main-constants';

@Component({
  selector: 'app-mis-reservas',
  templateUrl: './mis-reservas.component.html',
  styleUrls: ['./mis-reservas.component.css']
})
export class MisReservasComponent {
  tituloPagina = TITLES.misReservas;
}
