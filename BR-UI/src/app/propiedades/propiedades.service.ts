import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Propiedad, PropiedadCreacionDTO } from './propiedad';

@Injectable({
  providedIn: 'root'
})
export class PropiedadesService {

  constructor(private http: HttpClient) { }

  apiURL = environment.apiURL + 'propiedades'

  create(propiedad: PropiedadCreacionDTO) {
    return this.http.post(this.apiURL, propiedad)
  }
}
