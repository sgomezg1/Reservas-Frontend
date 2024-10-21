import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsForUserComponent } from './cards-for-user.component';

describe('CardsForUserComponent', () => {
  let component: CardsForUserComponent;
  let fixture: ComponentFixture<CardsForUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsForUserComponent]
    });
    fixture = TestBed.createComponent(CardsForUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
