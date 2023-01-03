import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { VendedorDTO } from './vendedor';

@Injectable({
  providedIn: 'root'
})
export class VendedoresService {

  constructor(private http: HttpClient) { }

  apiURL = environment.apiURL + 'vendedores'

  obtenerTodos():Observable<VendedorDTO[]> {
    return this.http.get<VendedorDTO[]>(this.apiURL)
  }
}
