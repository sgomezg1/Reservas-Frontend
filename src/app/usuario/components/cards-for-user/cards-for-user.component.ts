import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-for-user',
  templateUrl: './cards-for-user.component.html',
  styleUrls: ['./cards-for-user.component.css']
})
export class CardsForUserComponent {
  @Input() isBooking: boolean = true;
}
