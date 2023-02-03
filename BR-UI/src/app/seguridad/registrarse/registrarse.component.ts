import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { CredencialesUsuarioRegistro } from '../seguridad';
import { SeguridadService } from '../seguridad.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss']
})
export class RegistrarseComponent implements OnInit {

  constructor(
    private seguridadService: SeguridadService,
    private router: Router) { }

  errores: string[] = []

  ngOnInit(): void {
  }

  registrarse(credenciales: CredencialesUsuarioRegistro) {
    this.seguridadService.registrarse(credenciales)
    .subscribe({
      next: response => {
        this.seguridadService.guardarToken(response)
        this.router.navigate(['/'])
      },
      error: errores => {
        this.errores = parsearErroresAPI(errores)
      }
    })
  }

}
