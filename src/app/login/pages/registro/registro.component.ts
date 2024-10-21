import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  loading: boolean = false;
  passwordPattern: any =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
  registerForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.min(5)]],
      email: ['', [Validators.required, Validators.email]],
      nom_banda: ['', Validators.required],
      nom_registra: ['', [Validators.required, Validators.min(3)]],
      ape_registra: ['', [Validators.required, Validators.min(3)]],
      telefono_usuario: ['', Validators.required],
      password: [
        '',
        [Validators.required, Validators.pattern(this.passwordPattern)],
      ],
      confirm_password: [
        '',
        [Validators.required, Validators.pattern(this.passwordPattern)],
      ],
    });
  }

  getErrorField(field: string) {
    return (
      this.registerForm.get(field)?.invalid &&
      this.registerForm.get(field)?.touched
    );
  }

  registrarUsuario() {
    this.loginService
      .registrarUsuario(this.registerForm.value)
      .subscribe((data) => console.log);
  }

  goLogin() {
    this.router.navigateByUrl('');
  }
}
