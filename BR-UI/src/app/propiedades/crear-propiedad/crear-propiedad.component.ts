import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropiedadCreacionDTO } from '../propiedad';
import { PropiedadesService } from '../propiedades.service';

@Component({
  selector: 'app-crear-propiedad',
  templateUrl: './crear-propiedad.component.html',
  styleUrls: ['./crear-propiedad.component.scss']
})
export class CrearPropiedadComponent implements OnInit {

  constructor(
    private propiedadesService: PropiedadesService,
    private router: Router) { }

  ngOnInit(): void {
  }

  enviarFormulario(propiedad: PropiedadCreacionDTO) {
    this.propiedadesService.create(propiedad)
    .subscribe({
      next: () => {this.router.navigate(['/propiedades'])}
    })
  }

}
