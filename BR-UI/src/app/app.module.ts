import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { ReactiveFormsModule} from '@angular/forms'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AnunciosComponent } from './anuncios/anuncios.component';
import { AnuncioComponent } from './anuncios/anuncio/anuncio.component';
import { BlogComponent } from './blog/blog.component';
import { EntradaComponent } from './blog/entrada/entrada.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { CrearPropiedadComponent } from './propiedades/crear-propiedad/crear-propiedad.component';
import { EditarPropiedadComponent } from './propiedades/editar-propiedad/editar-propiedad.component';
import { FormPropiedadComponent } from './propiedades/form-propiedad/form-propiedad.component';
import { BorrarPropiedadComponent } from './propiedades/borrar-propiedad/borrar-propiedad.component';
import { MostrarErroresComponent } from './mostrar-errores/mostrar-errores.component';
import { InputImgComponent } from './utilidades/input-img/input-img.component';
import { RegistroExitosoComponent } from './utilidades/registro-exitoso/registro-exitoso.component';
import { IniciarSesionComponent } from './seguridad/iniciar-sesion/iniciar-sesion.component';
import { RegistrarseComponent } from './seguridad/registrarse/registrarse.component';
import { AutorizadoComponent } from './seguridad/autorizado/autorizado.component';
import { SeguridadInterceptorService } from './seguridad/seguridad-interceptor.service';
import { FormRegistrarseComponent } from './seguridad/form-registrarse/form-registrarse.component';
import { FormIniciarSesionComponent } from './seguridad/form-iniciar-sesion/form-iniciar-sesion.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    ContactoComponent,
    HomeComponent,
    EntradaComponent,
    LandingPageComponent,
    AnunciosComponent,
    AnuncioComponent,
    HeaderComponent,
    FooterComponent,
    PropiedadesComponent,
    CrearPropiedadComponent,
    EditarPropiedadComponent,
    FormPropiedadComponent,
    BorrarPropiedadComponent,
    MostrarErroresComponent,
    InputImgComponent,
    RegistroExitosoComponent,
    IniciarSesionComponent,
    RegistrarseComponent,
    AutorizadoComponent,
    FormRegistrarseComponent,
    FormIniciarSesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: SeguridadInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
