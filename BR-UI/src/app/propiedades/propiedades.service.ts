import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Propiedad, PropiedadCreacionDTO, PropiedadDTO } from './propiedad';

@Injectable({
  providedIn: 'root'
})
export class PropiedadesService {

  constructor(private http: HttpClient) { }

  apiURL = environment.apiURL + 'propiedades'

  propiedadCreada: PropiedadDTO = {
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

  create(propiedad: PropiedadCreacionDTO):Observable<PropiedadDTO> {
    const formData = this.buildFormData(propiedad)
    return this.http.post<PropiedadDTO>(this.apiURL, formData)
  }

  obtenerPorId(id: number):Observable<PropiedadDTO> {
    return this.http.get<PropiedadDTO>(`${this.apiURL}/${id}`)
  }

  private buildFormData(propiedad: PropiedadCreacionDTO): FormData {
    const formData = new FormData()
    formData.append('titulo', propiedad.titulo)
    formData.append('precio', propiedad.precio.toString())
    
    if(propiedad.imagen){
      formData.append('imagen', propiedad.imagen)
    }

    formData.append('descripcion', propiedad.descripcion)
    formData.append('habitaciones', propiedad.habitaciones.toString())
    formData.append('wc', propiedad.wc.toString())
    formData.append('estacionamiento', propiedad.estacionamiento.toString())
    formData.append('vendedorId', propiedad.vendedorId.toString())

    return formData
  }
}
