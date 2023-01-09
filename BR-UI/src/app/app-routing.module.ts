import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnuncioComponent } from './anuncios/anuncio/anuncio.component';
import { AnunciosComponent } from './anuncios/anuncios.component';
import { BlogComponent } from './blog/blog.component';
import { EntradaComponent } from './blog/entrada/entrada.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { BorrarPropiedadComponent } from './propiedades/borrar-propiedad/borrar-propiedad.component';
import { CrearPropiedadComponent } from './propiedades/crear-propiedad/crear-propiedad.component';
import { EditarPropiedadComponent } from './propiedades/editar-propiedad/editar-propiedad.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { IniciarSesionComponent } from './seguridad/iniciar-sesion/iniciar-sesion.component';
import { RegistrarseComponent } from './seguridad/registrarse/registrarse.component';
import { RegistroExitosoComponent } from './utilidades/registro-exitoso/registro-exitoso.component';

const routes: Routes = [
  {path: '', 
  component: LandingPageComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'nosotros', component: NosotrosComponent},
      {path: 'anuncios', component: AnunciosComponent},
      {path: 'anuncios/anuncio/:id', component: AnuncioComponent},
      {path: 'blog', component: BlogComponent},
      {path: 'entrada', component: EntradaComponent},
      {path: 'contacto', component: ContactoComponent},

      {path: 'propiedades', component: PropiedadesComponent},
      {path: 'propiedades/crear', component: CrearPropiedadComponent},
      {path: 'propiedades/editar/:id', component: EditarPropiedadComponent},
      {path: 'propiedades/borrar/:id', component: BorrarPropiedadComponent},
      {path: 'propiedades/registro-exitoso', component: RegistroExitosoComponent},

      {path: 'registrarse', component: RegistrarseComponent},
      {path: 'iniciar-sesion', component: IniciarSesionComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
