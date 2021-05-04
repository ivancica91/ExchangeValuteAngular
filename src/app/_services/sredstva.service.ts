import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Protuvrijednost } from '../_models/Protuvrijednost';
import { Sredstva } from '../_models/sredstva';

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

}
