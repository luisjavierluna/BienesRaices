import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VendedorDTO } from 'src/app/vendedores/vendedor';
import { VendedoresService } from 'src/app/vendedores/vendedores.service';
import { PropiedadCreacionDTO } from '../propiedad';

@Component({
  selector: 'app-form-propiedad',
  templateUrl: './form-propiedad.component.html',
  styleUrls: ['./form-propiedad.component.scss']
})
export class FormPropiedadComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private vendedoresService: VendedoresService) { }

    @Output() formToSubmit: EventEmitter<PropiedadCreacionDTO> = new EventEmitter<PropiedadCreacionDTO>()
    
    @Input() errores: string[] = []

    form: FormGroup = this.formBuilder.group({})
    vendedores: VendedorDTO[] = []
  
  ngOnInit(): void {
    this.obtenerVendedores()

    this.form = this.formBuilder.group({
      titulo: '',
      precio: '',
      imagen: '',
      descripcion: '',
      habitaciones: '',
      wc: '',
      estacionamiento: '',
      vendedorId: '',
    })
  }

  obtenerVendedores() {
    this.vendedoresService.obtenerTodos()
    .subscribe({
      next: vendedores => {this.vendedores = vendedores},
      error: errores => {console.log(errores)}
    })
  }

  enviarFormulario() {
    this.formToSubmit.emit(this.form.value)
  }

}
