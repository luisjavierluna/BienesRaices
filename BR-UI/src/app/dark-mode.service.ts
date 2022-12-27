import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  constructor() { }

  darkMode = false

  cambioModoOscuro() {
    this.darkMode = !this.darkMode
  }
}
