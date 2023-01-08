import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropiedadDTO } from 'src/app/propiedades/propiedad';
import { PropiedadesService } from 'src/app/propiedades/propiedades.service';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.scss']
})
export class AnuncioComponent implements OnInit {

  constructor(
    private propiedadesService: PropiedadesService,
    private activatedRoute: ActivatedRoute) { }

    anuncio: PropiedadDTO = {
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
      vendedorApellido: '',
    }
  
  ngOnInit(): void {
    this.obtenerPorId()
  }

  obtenerPorId() {
    this.activatedRoute.params.subscribe(params => {
      this.propiedadesService.obtenerPorId(params['id'])
      .subscribe({
        next: propiedad => {this.anuncio = propiedad},
        error: errores => {console.log(errores)}
      })
    })
  }

}
