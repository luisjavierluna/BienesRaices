import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PropiedadCreacionDTO } from '../propiedad';

@Component({
  selector: 'app-form-propiedad',
  templateUrl: './form-propiedad.component.html',
  styleUrls: ['./form-propiedad.component.scss']
})
export class FormPropiedadComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup = this.formBuilder.group({})
  
  @Output() formToSubmit: EventEmitter<PropiedadCreacionDTO> = new EventEmitter<PropiedadCreacionDTO>()

  @Input() errores: string[] = []
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo: '',
      precio: '',
      imagen: '',
      descripcion: '',
      habitaciones: '',
      wc: '',
      estacionamiento: '',
      creado: '',
      vendedorId: '',
    })
  }

  enviarFormulario() {
    this.formToSubmit.emit(this.form.value)
  }

}
