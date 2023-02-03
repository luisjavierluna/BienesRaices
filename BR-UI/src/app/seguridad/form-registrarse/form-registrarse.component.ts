import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CredencialesUsuarioRegistro } from '../seguridad';

@Component({
  selector: 'app-form-registrarse',
  templateUrl: './form-registrarse.component.html',
  styleUrls: ['./form-registrarse.component.scss']
})
export class FormRegistrarseComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder) { }

  @Output() formToSubmit: EventEmitter<CredencialesUsuarioRegistro> = new EventEmitter<CredencialesUsuarioRegistro>()

  @Input() errores: string[] = []

  form: FormGroup = this.formBuilder.group({})

  erroresFrontend: string[] = []

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', {validators: [Validators.required, Validators.email]}],
      name: ['', {validators: [Validators.required]}],
      password: ['', {validators: [Validators.required]}]
    })
  }

  getEmailErrorMessage() {
    this.erroresFrontend = []
    var campoEmail = this.form.get('email')
    var campoName = this.form.get('name')
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
      let nameRequired = 'El campo Nombre es requerido'
      this.erroresFrontend.push(nameRequired)
    }

    if(campoName?.hasError('required') && campoName.touched) {
      let passwordRequired = 'El campo Contraseña es requerido'
      this.erroresFrontend.push(passwordRequired)
    }

    return this.erroresFrontend
  }

}
