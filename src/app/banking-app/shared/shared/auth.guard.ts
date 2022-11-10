import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(public router: Router, private alertServiceModal: AlertService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const isLoggedIn: any = JSON.parse(sessionStorage.getItem('isLoggedIn'));
    if (isLoggedIn !== true) {
      this.alertServiceModal.loadingSpinner('Access Denied, Login is Required to Access This Page!', 3000, '', true);
      this.router.navigate(['/banking']);
    }
    return true;
  }
}
