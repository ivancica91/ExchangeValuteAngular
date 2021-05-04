import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Zahtjev } from '../_models/zahtjev';

@Injectable({
  providedIn: 'root'
})
export class ZahtjeviService {
  baseUrl = environment.apiUrl;
  zahtjevi: Zahtjev[] = []


  constructor(private http: HttpClient) { }

  getAll(): Observable<Zahtjev[]> {
    return this.http.get<Zahtjev[]>(this.baseUrl + 'Zahtjevi/allZahtjeve');
  }

  getZahtjeveByLoggedUser(): Observable<Zahtjev[]> {
    return this.http.get<Zahtjev[]>(this.baseUrl + 'Zahtjevi/zahtjeveByLoggedUser');
  }

}
