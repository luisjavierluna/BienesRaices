import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { CredencialesUsuario } from '../seguridad';
import { SeguridadService } from '../seguridad.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.scss']
})
export class IniciarSesionComponent implements OnInit {

  constructor(
    private seguridadService: SeguridadService,
    private router: Router) { }

  errores: string[] = []

  ngOnInit(): void {
  }

  iniciarSesion(credenciales: CredencialesUsuario) {
    this.seguridadService.iniciarSesion(credenciales)
    .subscribe({
      next: response => {
        this.seguridadService.guardarToken(response)
        this.router.navigate(['/'])
      },
      error: errores => {this.errores = parsearErroresAPI(errores)}
    })
  }

}
