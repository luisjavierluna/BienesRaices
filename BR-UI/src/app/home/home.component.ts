import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { PropiedadDTO } from '../propiedades/propiedad';
import { PropiedadesService } from '../propiedades/propiedades.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  
  constructor(private propiedadesService: PropiedadesService) { }

  anunciosPropiedades: PropiedadDTO[] = []
  cantidadAnunciosAAmostrar = 3

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
