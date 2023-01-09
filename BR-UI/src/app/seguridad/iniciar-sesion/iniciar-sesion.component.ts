import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CredencialesUsuario } from '../seguridad';
import { SeguridadService } from '../seguridad.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.scss']
})
export class IniciarSesionComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private seguridadService: SeguridadService,
    private router: Router) { }

  form: FormGroup = this.formBuilder.group({})

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', {validators: [Validators.required, Validators.email]}],
      password: ['', {validators: [Validators.required]}]
    })
  }

  iniciarSesion(credenciales: CredencialesUsuario) {
    this.seguridadService.iniciarSesion(credenciales)
    .subscribe({
      next: response => {
        this.seguridadService.guardarToken(response)
        this.router.navigate(['/'])
      },
      error: errores => {console.log(errores)}
    })
  }

}
