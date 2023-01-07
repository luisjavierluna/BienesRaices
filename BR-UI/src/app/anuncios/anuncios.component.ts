import { Component, OnInit } from '@angular/core';
import { PropiedadDTO } from '../propiedades/propiedad';
import { PropiedadesService } from '../propiedades/propiedades.service';

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.scss']
})
export class AnunciosComponent implements OnInit {

  constructor(private propiedadesService: PropiedadesService) { }

  anunciosPropiedades: PropiedadDTO[] = []
  cantidadAnunciosAAmostrar = 10

  ngOnInit(): void {
    this.obtenerAnunciosPropiedades()
  }

  obtenerAnunciosPropiedades() {
    this.propiedadesService.obtenerTodos()
    .subscribe({
      next: response => {this.anunciosPropiedades = response.slice(0, this.cantidadAnunciosAAmostrar)}
    })
  }

}
