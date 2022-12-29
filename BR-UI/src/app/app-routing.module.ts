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

const routes: Routes = [
  {path: '', 
  component: LandingPageComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'nosotros', component: NosotrosComponent},
      {path: 'anuncios', component: AnunciosComponent},
      {path: 'anuncio', component: AnuncioComponent},
      {path: 'blog', component: BlogComponent},
      {path: 'entrada', component: EntradaComponent},
      {path: 'contacto', component: ContactoComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
