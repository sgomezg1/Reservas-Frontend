import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-solicitud-reestablecer',
  templateUrl: './solicitud-reestablecer.component.html',
  styleUrls: ['./solicitud-reestablecer.component.css'],
})
export class SolicitudReestablecerComponent {
  loading: boolean = false;
  recoverPasswordForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.recoverPasswordForm = this.fb.group({
      email: ['', Validators.required],
    });
  }
}
