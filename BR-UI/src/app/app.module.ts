import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NosotrosComponent } from './navegacion/nosotros/nosotros.component';
import { AnunciosComponent } from './navegacion/anuncios/anuncios.component';
import { BlogComponent } from './navegacion/blog/blog.component';
import { ContactoComponent } from './navegacion/contacto/contacto.component';
import { HomeComponent } from './navegacion/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NosotrosComponent,
    AnunciosComponent,
    BlogComponent,
    ContactoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
