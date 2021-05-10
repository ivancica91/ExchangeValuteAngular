import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Valuta } from '../_models/valuta';
import { OdobravanjeZahtjeva, PostZahtjev, Zahtjev } from '../_models/zahtjev';

@Injectable({
  providedIn: 'root'
})
export class ZahtjeviService {
  baseUrl = environment.apiUrl;
  zahtjevi: Zahtjev[] = []
  valute: Valuta[];


  constructor(private http: HttpClient) { }

  getAll(): Observable<Zahtjev[]> {
    return this.http.get<Zahtjev[]>(this.baseUrl + 'Zahtjevi/allZahtjeve');
  }

  getZahtjeveByLoggedUser(): Observable<Zahtjev[]> {
    return this.http.get<Zahtjev[]>(this.baseUrl + 'Zahtjevi/zahtjeveByLoggedUser');
  }


  // VIDI KAKO OVO, ZNACI TREBA BIT MOGUCE PREGLEDAVANJE UNUTAR NEKOG DATUMA
  getAllOdobreneZahtjeve(): Observable<any> {
    return this.http.get<Valuta[]>(this.baseUrl + 'Zahtjevi/allOdobreneZahtjeve');
  }

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
