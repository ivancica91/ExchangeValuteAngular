import { PutRole } from './../_models/role';
import { HttpClient } from '@angular/common/http';
import { User } from './../_models/user';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Member, PostMember } from '../_models/member';
import { Role } from '../_models/role';
import { PostValuta } from '../_models/valuta';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;
  members: Member[] = [];
  roles: Role[];
  users: User[] = [];

  constructor(private http: HttpClient) { }

  getMembers() {
    if (this.members.length > 0) return of (this.members);
    return this.http.get<Member[]>(this.baseUrl + 'Korisnik/GetAllUsers').pipe(
      map(members => {
        this.members = members;
        return members;
      })
    );
  }

  getMember(id: number) {
    const member = this.members.find(x => x.id === id);
    if (member !== undefined) return of (member);
    return this.http.get<Member>(this.baseUrl + 'Korisnik/'+ id);
  }

  getUser(id: number) {
    const user = this.users.find(x => x.id === id);
    if (this.users !== undefined) return of (user);
    return this.http.get<User>(this.baseUrl + 'Korisnik/'+ id);
  }


  updateMember(id: number,member: Member): Observable<any> {
    return this.http.put(this.baseUrl + 'Korisnik/UpdateUserById/' + id, member).pipe(
      map(() => {
        const index = this.members.indexOf(member);
        this.members[index] = member;
      })
    );
  }

  updateUser(id: number,user: User): Observable<any> {
    return this.http.put(this.baseUrl + 'Korisnik/UpdateUserById/' + id, user).pipe(
      map(() => {
        const index = this.users.indexOf(user);
        this.users[index] = user;
      })
    );
  }


  postMember(postMember: PostMember): Observable<PostMember> {
    return this.http.post<PostMember>(this.baseUrl + 'Korisnik/AddUser', postMember)
    .pipe(
      map((response) => response)
    );
  }


  getMembersWithRoles() {
    return this.http.get<Partial<Member[]>>(this.baseUrl + 'Korisnik/usersWithRoles');
  }

  updateMemberRoles(userName: string, roles: string[]) {
    return this.http.post(this.baseUrl + 'Korisnik/editRoles/' + userName + '?role=' + roles, {});
  }






  }






