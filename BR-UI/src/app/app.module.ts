import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NosotrosComponent } from './navegacion/nosotros/nosotros.component';
import { AnunciosComponent } from './navegacion/anuncios/anuncios.component';
import { BlogComponent } from './navegacion/blog/blog.component';
import { ContactoComponent } from './navegacion/contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { AnuncioComponent } from './navegacion/anuncios/anuncio/anuncio.component';
import { EntradaComponent } from './navegacion/blog/entrada/entrada.component';

@NgModule({
  declarations: [
    AppComponent,
    NosotrosComponent,
    AnunciosComponent,
    BlogComponent,
    ContactoComponent,
    HomeComponent,
    NavegacionComponent,
    AnuncioComponent,
    EntradaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
