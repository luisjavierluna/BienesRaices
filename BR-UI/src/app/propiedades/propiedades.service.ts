import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Propiedad, PropiedadCreacionDTO } from './propiedad';

@Injectable({
  providedIn: 'root'
})
export class PropiedadesService {

  constructor(private http: HttpClient) { }

  apiURL = environment.apiURL + 'propiedades'

  create(propiedad: PropiedadCreacionDTO):Observable<PropiedadCreacionDTO> {
    const formData = this.buildFormData(propiedad)
    return this.http.post<PropiedadCreacionDTO>(this.apiURL, formData)
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
