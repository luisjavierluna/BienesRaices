import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class EsAdminGuard implements CanActivate {
  
  constructor(
    private seguridadService: SeguridadService,
    private router: Router) { }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.seguridadService.sesionIniciadaActiva()) {
      return true
    }

    this.router.navigate(['/iniciar-sesion'])
    
    return false;
  }
  
}
