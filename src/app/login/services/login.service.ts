import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistroUsuario } from '../interfaces/registro.interface';
import { environment } from 'src/environments/environment.development';
import { RespuestaServer } from 'src/app/interfaces/retornoServidor.interface';
import { Login } from '../interfaces/login.interface';
import { ActualizarPassword } from '../interfaces/actualizar.interface';

export const API_URL = environment.API_URL;
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(data: Login) {
    return this.http.post(`${API_URL}/login`, data);
  }

  registrarUsuario(data: RegistroUsuario) {
    return this.http.post<RespuestaServer>(`${API_URL}/signup`, data);
  }

  solicitudRecuperarPassword(correoEnviar: string) {
    return this.http.get<RespuestaServer>(
      `${API_URL}/usuarios/enviar_correo_recuperacion_contrasenia/${correoEnviar}`
    );
  }

  actualizarPassword(data: ActualizarPassword, id: number, token: string) {
    return this.http.put(
      ` ${API_URL}/usuarios/actualizar_pass_usuario/${id}/${token}`,
      data
    );
  }
}
