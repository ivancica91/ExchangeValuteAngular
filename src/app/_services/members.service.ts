import { HttpClient } from '@angular/common/http';
import { User } from './../_models/user';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;
  members: User[] = [];

  constructor(private http: HttpClient) { }

  getMembers() {
    if (this.members.length > 0) return of (this.members);
    return this.http.get<User[]>(this.baseUrl + 'Korisnik/GetAllUsers').pipe(
      map(members => {
        this.members = members;
        return members;
      })
    );
  }

// zapravo ni nemam u backu ovaj kontroler, dodaj
  getMember(id: number) {
    const member = this.members.find(x => x.id === id);
    if (member !== undefined) return of (member);
    return this.http.get<User>(this.baseUrl + 'Korisnik/'+ id);
  }

  updateMember(user: User) {
    return this.http.put(this.baseUrl + 'Korisnik/UpdateUserById', user).pipe(
      map(() => {
        const index = this.members.indexOf(user);
        this.members[index] = user;
      })
    );

  }
}