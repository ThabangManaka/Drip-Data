import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthStateService } from '../services/auth-state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isSignedIn: boolean;
  constructor(private auth: AuthStateService, private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
      this.auth.userAuthState.subscribe(val => {
        this.isSignedIn = val;
    });
     if(  this.isSignedIn !== true) {
       this.router.navigate(['login']);
     }
      return true;
  }
  
}
