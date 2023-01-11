import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CredencialesUsuario, RespuestaAutenticacion } from './seguridad';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  constructor(private http: HttpClient) { }

  apiURL = environment.apiURL + 'cuentas'
  private readonly  llaveToken = 'token'
  private readonly  llaveExpiracion = 'llave-expiracion'

  sesionIniciadaActiva() {
    const token = localStorage.getItem(this.llaveToken)

    if (!token) {
      return false
    }

    const expiracion = localStorage.getItem(this.llaveExpiracion)
    const fechaExpiracion = new Date(String(expiracion))

    if (fechaExpiracion <= new Date()) {
      this.cerrarSesion()
      return false
    }

    return true
  }

  cerrarSesion() {
    localStorage.removeItem(this.llaveToken)
    localStorage.removeItem(this.llaveExpiracion)
    window.location.reload()
  }

  obtenerCampoJWT(field: string): string {
    const token = localStorage.getItem(this.llaveToken)

    if (!token) { return ''}

    var dataToken = JSON.parse(atob(token.split('.')[1]))
    return dataToken[field]
  }

  registrarse(credenciales: CredencialesUsuario): Observable<RespuestaAutenticacion> {
    return this.http.post<RespuestaAutenticacion>(this.apiURL + '/registrarse', credenciales)
  }

  iniciarSesion(credenciales: CredencialesUsuario): Observable<RespuestaAutenticacion> {
    return this.http.post<RespuestaAutenticacion>(this.apiURL + '/iniciar-sesion', credenciales)
  }

  guardarToken(respuestaAutenticacion: RespuestaAutenticacion) {
    localStorage.setItem(this.llaveToken, respuestaAutenticacion.token)
    localStorage.setItem(this.llaveExpiracion, respuestaAutenticacion.expiracion.toString())
  }
}
