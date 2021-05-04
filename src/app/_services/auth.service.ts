import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string = environment.apiUrl;
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();


  // helper = new JwtHelperService();

  // currentUser: User = {
  //   id: null,
  //   userName: null,
  //   email: null,
  //   roles: null,
  //   ime: null,
  //   prezime: null,
  //   token: null,
  //   userRoles: null,
  //   slika: null,
  //   lozinka: null

  // }

  constructor(private http: HttpClient) { }

  // login(model: any): Observable<User> {
  //   return this.http.post(this.baseUrl + 'Auth/login', model).pipe(
  //     map((response: any) => {
  //       const decodedToken = this.helper.decodeToken(response.token);

  //       this.currentUser.userName = decodedToken.given_name;
  //       this.currentUser.email = decodedToken.email;
  //       this.currentUser.roles = decodedToken.role;

  //       localStorage.setItem('token', response.token);

  //       return this.currentUser;
  //     })
  //   );
  // }

  login(model: any) {
    return this.http.post(this.baseUrl + 'Auth/login', model).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
          // localStorage.setItem('user', JSON.stringify(user));
          // console.log(user)
          this.setCurrentUser(user);
        }
      })
    );
  }

  register(model: any) {
    return this.http.post(this.baseUrl + 'Auth/register', model).pipe(
      map((user: User) => {
        if(user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.setCurrentUser(user);
        }
        //return user; // makni kasnije taj line, samo da vidim sta vraca kad se registrira user
      })
    );
  }

  setCurrentUser(user: User) {
    user.roles = [];
    const roles = this.getDecodedToken(user.token).role;
    // vidimo jel roles array ili string, ako vec je array, uzmmeo to, ako ima samo jednu rolu, pushamo nju u role array
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    Array.isArray(roles) ? user.roles = roles : user.roles.push(roles);
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSource.next(user);
  }

  // loggedIn(): boolean {
  //   const token = localStorage.getItem('token');
  //   return !this.helper.isTokenExpired(token);
  // }

  // logout() {
  //   this.currentUser = {
  //     id: null,
  //     userName: null,
  //     email: null,
  //     roles: null,
  //     ime: null,
  //     prezime: null,
  //     token: null,
  //     userRoles: null,
  //     slika: null,
  //     lozinka: null
  //     };
  //   localStorage.removeItem('token');
  // }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }

   //atob metoda sluzi za dekodiranje stringa
  // splitamo token koji dolazi u 3 djela odjeljena točkom: header, payload i signature
  // nas zanima payload
  getDecodedToken(token) {
    return JSON.parse(atob(token.split('.')[1]));
  }


  confirmEmail(model: any) {
    return this.http.post(this.baseUrl + 'Auth/confirmemail', model);
  }
}
