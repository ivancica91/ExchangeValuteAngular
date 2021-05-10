import { AuthService } from 'src/app/_services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
  constructor(private authService: AuthService, private toastr: ToastrService) {}

  canActivate(): Observable<boolean> {
    return this.authService.currentUser$.pipe(
      map(user => {
        if (user){return true}
        this.toastr.error('Nedozvoljen pristup');
        return false
      })
    );
  }

}
