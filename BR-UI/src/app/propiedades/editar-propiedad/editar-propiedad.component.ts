import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { PropiedadCreacionDTO, PropiedadDTO } from '../propiedad';
import { PropiedadesService } from '../propiedades.service';

@Component({
  selector: 'app-editar-propiedad',
  templateUrl: './editar-propiedad.component.html',
  styleUrls: ['./editar-propiedad.component.scss']
})
export class EditarPropiedadComponent implements OnInit {

  constructor(
    private propiedadesService: PropiedadesService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  errores: string[] = []

  propiedadAEditar: PropiedadDTO = {
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
        next: propiedad => {this.propiedadAEditar = propiedad},
        error: errores => {this.errores = parsearErroresAPI(errores)}
      })
    })
  }

  enviarFormulario(propiedad: PropiedadCreacionDTO) {
    this.propiedadesService.actualizar(this.propiedadAEditar.id, propiedad)
    .subscribe({
      next: () => {this.router.navigate(['/propiedades/registro-exitoso'])},
      error: errores => {this.errores = parsearErroresAPI(errores)}
    })
  }

}
