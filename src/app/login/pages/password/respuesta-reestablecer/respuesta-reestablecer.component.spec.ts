import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestaReestablecerComponent } from './respuesta-reestablecer.component';

describe('RespuestaReestablecerComponent', () => {
  let component: RespuestaReestablecerComponent;
  let fixture: ComponentFixture<RespuestaReestablecerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RespuestaReestablecerComponent]
    });
    fixture = TestBed.createComponent(RespuestaReestablecerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
