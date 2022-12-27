import { style } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';
import { DarkModeService } from '../dark-mode.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(
    private renderer2: Renderer2,
    private darkModeService: DarkModeService) { }
  
  // @ViewChild('mobileMenu', { static: true}) mobileMenu?: ElementRef
  @ViewChild('navegacion') navegacion?: ElementRef
  body =  document.body
  show = false

  ngOnInit(): void {
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

  modoOscuro() {
    const asBody = document.body

    let darkMode = this.darkModeService.darkMode

    if(darkMode === false) {
      this.renderer2.addClass(asBody, 'dark-mode')
      this.darkModeService.cambioModoOscuro()
    } else {
      this.renderer2.removeClass(asBody, 'dark-mode')
      this.darkModeService.cambioModoOscuro()
    }
  }

}
