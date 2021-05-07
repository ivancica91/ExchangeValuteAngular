import { PostSredstva, Sredstva } from 'src/app/_models/sredstva';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Protuvrijednost } from 'src/app/_models/protuvrijednost';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SredstvaService {
  baseUrl = environment.apiUrl;
  sredstva: Sredstva[]
  protuvrijednosti: Protuvrijednost[];

  constructor(private http: HttpClient) { }

  getSredstva(): Observable<Sredstva[]> {
    return this.http.get<Sredstva[]>(this.baseUrl + 'Sredstva/sredstvaByLoggedUser');
  }

  getProtuvrijednost(): Observable<Protuvrijednost[]> {
    return this.http.get<Protuvrijednost[]>(this.baseUrl + 'Sredstva/ProtuvrijednostHRK');
  }

  postSredstvaByLoggedUser(postSredstva: PostSredstva): Observable<PostSredstva> {
    return this.http.post<PostSredstva>(this.baseUrl + 'Sredstva/PostSredstvaByLoggedUser', postSredstva)
    .pipe(
      map((response) => response)
    );
  }

  putSredstvaByLoggedUser(sredstva: PostSredstva): Observable<PostSredstva> {
    return this.http.put<PostSredstva>(this.baseUrl + 'Sredstva/PutSredstvaByLoggedUser', sredstva)
    .pipe(
      map((response) => response)
    );
  }

}
