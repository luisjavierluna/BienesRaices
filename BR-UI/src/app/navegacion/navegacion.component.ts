import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { DarkModeService } from '../dark-mode.service';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.scss']
})
export class NavegacionComponent implements OnInit {

  constructor(
    private renderer2: Renderer2,
    private darkModeService: DarkModeService) { }
  
  // @ViewChild('mobileMenu', { static: true}) mobileMenu?: ElementRef
  @ViewChild('navegacion') navegacion?: ElementRef
  body =  document.body
  show = false

  ngOnInit(): void {
    if(this.darkModeService.darkModeAlreadySet === false) {
      let darkModeIsActive = window.matchMedia('(prefers-color-scheme: dark)')
      this.darkModeService.cambioModoOscuro(darkModeIsActive.matches)
      this.modoOscuroInicial()
      this.darkModeService.establecerModoInicial()
    }
  }

  navegacionResponsive() {
    const asNavegacion = this.navegacion?.nativeElement
    
    if(this.show === false) {
      this.renderer2.addClass(asNavegacion, 'mostrar')
      this.show = !this.show
    } else {
      this.renderer2.removeClass(asNavegacion, 'mostrar')
      this.show = !this.show
    }
  }

  modoOscuroInicial() {
    const asBody = document.body

    let darkMode = this.darkModeService.darkMode

    if(darkMode === true) {
      this.renderer2.addClass(asBody, 'dark-mode')
    } else {
      this.renderer2.removeClass(asBody, 'dark-mode')
    }
  }

  modoOscuroClickEvent() {
    const asBody = document.body

    let darkMode = this.darkModeService.darkMode

    if(darkMode === false) {
      this.renderer2.addClass(asBody, 'dark-mode')
      this.darkModeService.cambioModoOscuro(!darkMode)
    } else {
      this.renderer2.removeClass(asBody, 'dark-mode')
      this.darkModeService.cambioModoOscuro(!darkMode)
    }
  }

}
