import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { OdobravanjeZahtjeva, PostZahtjev, Zahtjev } from '../_models/zahtjev';

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


  // VIDI KAKO OVO, ZNACI TREBA BIT MOGUCE PREGLEDAVANJE UNUTAR NEKOG DATUMA
  // getAllOdobreneZahtjeve(from: number, to: number): Observable<Zahtjev[]> {
  //   return this.http.get<Zahtjev[]>(this.baseUrl + 'Zahtjevi/allOdobreneZahtjeve', from, to);
  // }

  postZahtjevByLoggedUser(zahtjev: PostZahtjev): Observable<PostZahtjev> {
    return this.http.post<PostZahtjev>(this.baseUrl + 'Zahtjevi/zahtjev', zahtjev)
    .pipe(
      map((response) => response)
    );
  }

  odobravanjeZahtjeva(zahtjev: OdobravanjeZahtjeva): Observable<OdobravanjeZahtjeva> {
    return this.http.put<OdobravanjeZahtjeva>(this.baseUrl + 'Zahtjevi/odobravanjeZahtjeva', zahtjev)
    .pipe(
      map((response) => response)
    );
  }


}
