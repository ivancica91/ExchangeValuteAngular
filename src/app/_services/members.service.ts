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

  updateMember(id: number,member: Member): Observable<any> {
    return this.http.put(this.baseUrl + 'Korisnik/UpdateUserById/' + id, member).pipe(
      map(() => {
        const index = this.members.indexOf(member);
        this.members[index] = member;
      })
    );
  }

  postMember(postMember: PostMember): Observable<PostMember> {
    return this.http.post<PostMember>(this.baseUrl + 'Korisnik/AddUser', postMember)
    .pipe(
      map((response) => response)
    );
  }

  // getMembersWithRoles(): Observable<Role[]> {
  //   if (this.roles.length > 0) return of (this.roles);
  //   return this.http.get<Role[]>(this.baseUrl + 'Korisnik/usersWithRoles').pipe(
  //     map(roles => {
  //       this.roles = roles;
  //       return roles;
  //     })
  //   );
  // }

  getMembersWithRoles() {
    return this.http.get<Partial<Member[]>>(this.baseUrl + 'Korisnik/usersWithRoles');
  }

  updateMemberRoles(userName: string, roles: string[]) {
    return this.http.post(this.baseUrl + 'Korisnik/editRoles/' + userName + '?role=' + roles, {});
  }

  // editRoles(putRole: PutRole): Observable<any> {
  //   return this.http.put(this.baseUrl + 'Korisnik/editRoles', putRole)
  // }

  // updateValuta(valutaId: number, valuta: PostValuta): Observable<any> {
  //   return this.http.put(this.baseUrl + 'Valute/AzurirajValutu/' + valutaId, valuta)
  // }





  }






