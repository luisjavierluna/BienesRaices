import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AnunciosComponent } from './navegacion/anuncios/anuncios.component';
import { BlogComponent } from './navegacion/blog/blog.component';
import { ContactoComponent } from './navegacion/contacto/contacto.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { NosotrosComponent } from './navegacion/nosotros/nosotros.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'navegacion', 
  component: NavegacionComponent,
    children: [
      {path: 'nosotros', component: NosotrosComponent},
      {path: 'anuncios', component: AnunciosComponent},
      {path: 'blog', component: BlogComponent},
      {path: 'contacto', component: ContactoComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
