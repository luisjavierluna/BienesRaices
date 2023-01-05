import { Component, OnInit } from '@angular/core';
import { PropiedadDTO } from './propiedad';
import { PropiedadesService } from './propiedades.service';

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styleUrls: ['./propiedades.component.scss']
})
export class PropiedadesComponent implements OnInit {

  propiedades: PropiedadDTO[] = []

  constructor(private propiedadesService: PropiedadesService) { }

  ngOnInit(): void {
    this.obtenerTodos()
  }

  obtenerTodos() {
    this.propiedadesService.obtenerTodos()
    .subscribe({
      next: propiedades => {this.propiedades = propiedades}
    })
  }

}
