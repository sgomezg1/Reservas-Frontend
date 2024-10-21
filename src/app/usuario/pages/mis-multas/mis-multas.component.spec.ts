import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisMultasComponent } from './mis-multas.component';

describe('MisMultasComponent', () => {
  let component: MisMultasComponent;
  let fixture: ComponentFixture<MisMultasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisMultasComponent]
    });
    fixture = TestBed.createComponent(MisMultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
