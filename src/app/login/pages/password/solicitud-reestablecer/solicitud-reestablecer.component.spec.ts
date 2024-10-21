import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudReestablecerComponent } from './solicitud-reestablecer.component';

describe('SolicitudReestablecerComponent', () => {
  let component: SolicitudReestablecerComponent;
  let fixture: ComponentFixture<SolicitudReestablecerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitudReestablecerComponent]
    });
    fixture = TestBed.createComponent(SolicitudReestablecerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
