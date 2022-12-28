import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  constructor() { }

  darkMode = false
  darkModeAlreadySet = false

  cambioModoOscuro(darkModeIsActive: boolean) {
    this.darkMode = darkModeIsActive
  }

  establecerModoInicial(){
    this.darkModeAlreadySet = true
  }
}
