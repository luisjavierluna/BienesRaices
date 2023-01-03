import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VendedorDTO } from 'src/app/vendedores/vendedor';
import { VendedoresService } from 'src/app/vendedores/vendedores.service';
import { Propiedad, PropiedadCreacionDTO, PropiedadDTO } from '../propiedad';

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
    
    @Input() propiedadAEditar: PropiedadDTO = {
      id: 0,
      titulo: '',
      precio: 0,
      imagen: '',
      descripcion: '',
      habitaciones: 0,
      wc: 0,
      estacionamiento: 0,
      vendedorId: 0,
      vendedorNombre: '',
    }

    form: FormGroup = this.formBuilder.group({})
    vendedores: VendedorDTO[] = []
    imagenPropiedadCambio = false
  
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

  
  selectedFile(file: any){
    this.imagenPropiedadCambio = true
    this.form.get('imagen')?.setValue(file)
  }

  enviarFormulario() {
    if(!this.imagenPropiedadCambio) {
      this.form.patchValue({'imagen':null})
    }

    this.formToSubmit.emit(this.form.value)
  }

}
