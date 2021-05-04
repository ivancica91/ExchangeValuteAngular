import { User } from './../_models/user';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { take } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let currentUser: User;


    // pomocu jwt interceptora izvlacimo token i gledamo je li useru dozvoljeno izvrsiti request
    this.authService.currentUser$.pipe(take(1)).subscribe(user => currentUser = user);
    if (currentUser) {
      request = request.clone({
        setHeaders: {
          authorization: `Bearer ${currentUser.token}`
        }
      });

    }
    return next.handle(request);
  }
}
