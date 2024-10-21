import { Component } from '@angular/core';
import { TITLES } from 'src/app/constants/main-constants';

@Component({
  selector: 'app-mis-multas',
  templateUrl: './mis-multas.component.html',
  styleUrls: ['./mis-multas.component.css']
})
export class MisMultasComponent {
  tituloPagina = TITLES.misMultas;
}
