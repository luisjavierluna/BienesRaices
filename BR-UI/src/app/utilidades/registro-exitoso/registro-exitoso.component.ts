import { Component, OnInit } from '@angular/core';
import { Propiedad, PropiedadDTO } from 'src/app/propiedades/propiedad';
import { PropiedadesService } from 'src/app/propiedades/propiedades.service';

@Component({
  selector: 'app-registro-exitoso',
  templateUrl: './registro-exitoso.component.html',
  styleUrls: ['./registro-exitoso.component.scss']
})
export class RegistroExitosoComponent implements OnInit {

  constructor(private propiedadesService: PropiedadesService) { }

  propiedadCreadaDB: PropiedadDTO = {
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
 
  propiedadId: number = 0

  ngOnInit(): void {
    this.propiedadId = this.propiedadesService.propiedadCreada.id

    if(this.propiedadId != 0) {
      this.obtenerPorId(this.propiedadId)
    }
  }

  obtenerPorId(id: number) {
    this.propiedadesService.obtenerPorId(id)
    .subscribe({
      next: propiedad => {this.propiedadCreadaDB = propiedad},
      error: error => {console.log(error)}
    })
  }

}
