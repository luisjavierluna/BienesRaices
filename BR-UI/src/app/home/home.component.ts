import { style } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(private renderer2: Renderer2) { }
  
  // @ViewChild('mobileMenu', { static: true}) mobileMenu?: ElementRef
  @ViewChild('navegacion') navegacion?: ElementRef
  

  show = false

  ngOnInit(): void {
  }

  navegacionResponsive() {
    
    if(this.show === false) {
      const asNavegacion = this.navegacion?.nativeElement
      this.renderer2.addClass(asNavegacion, 'mostrar')
      this.show = !this.show
    } else {
      const asNavegacion = this.navegacion?.nativeElement
      this.renderer2.removeClass(asNavegacion, 'mostrar')
      this.show = !this.show
    }
  }

}
