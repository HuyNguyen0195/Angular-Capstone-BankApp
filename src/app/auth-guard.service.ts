import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth-service.service';
import { User } from './Models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(
    private router:Router,
    private authService:AuthService
  ) { }
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      const requiredRole='admin';
     
      if(!this.authService.getAuth()){
        this.router.navigate(['login'])
        return false;
      }
      if(this.authService.getUser().userType === 'admin'){
        return true
      }
      if(this.authService.getUser().userType !== route.data?.['role'] ){
        this.router.navigate(['login'])
        return false
      }
      return true
    }
 
}
