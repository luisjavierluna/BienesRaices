import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CredencialesUsuarioRegistro } from '../seguridad';

@Component({
  selector: 'app-form-iniciar-sesion',
  templateUrl: './form-iniciar-sesion.component.html',
  styleUrls: ['./form-iniciar-sesion.component.scss']
})
export class FormIniciarSesionComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder) { }

  @Output() formToSubmit: EventEmitter<CredencialesUsuarioRegistro> = new EventEmitter<CredencialesUsuarioRegistro>()

  @Input() errores: string[] = []

  form: FormGroup = this.formBuilder.group({})

  erroresFrontend: string[] = []

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', {validators: [Validators.required, Validators.email]}],
      password: ['', {validators: [Validators.required]}]
    })
  }

  getEmailErrorMessage() {
    this.erroresFrontend = []
    var campoEmail = this.form.get('email')
    var campoPassword = this.form.get('password')

    if(campoEmail?.hasError('required') && campoEmail.touched) {
      let emailRequired = 'El campo Email es requerido'
      this.erroresFrontend.push(emailRequired)
    }

    if(campoEmail?.hasError('email') && campoEmail.touched) {
      let emailFormat = 'El formato del correo ingresado no es válido'
      this.erroresFrontend.push(emailFormat)
    }

    if(campoPassword?.hasError('required') && campoPassword.touched) {
      let passwordRequired = 'El campo Contraseña es requerido'
      this.erroresFrontend.push(passwordRequired)
    }

    return this.erroresFrontend
  }

}
