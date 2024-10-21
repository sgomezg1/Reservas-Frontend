import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-titles',
  templateUrl: './page-titles.component.html',
  styleUrls: ['./page-titles.component.css']
})
export class PageTitlesComponent {
  @Input() tituloPagina: string = '';
}
