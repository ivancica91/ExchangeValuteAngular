import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ModeratorGuard implements CanActivate {
  constructor(private authService: AuthService, private toastr: ToastrService) {}

    canActivate(): Observable<boolean> {
    return this.authService.currentUser$.pipe(
      map(user => {
        if (user.roles.includes('administrator') || user.roles.includes('moderator')) {
          return true;
        }
        this.toastr.error('Nemate pristup sadržaju.')
        return false;
      })
    );
  }


}
