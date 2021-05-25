import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Valuta } from '../_models/valuta';
import { DateRange, OdobravanjeZahtjeva, OdobreniZahtjevIznosi, PostZahtjev, Zahtjev } from '../_models/zahtjev';

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


  getAllOdobreneZahtjeve(/* id?: number, */ from?: Date, to?: Date): Observable<any> {

    let params = new HttpParams();

    // if (id) {
    //   params.set('id', id.toString());
    // }

    if (from && to) {
      params = params.set('from', from.toUTCString());
      params = params.set('to', to.toUTCString());
    }

    return this.http.get<OdobreniZahtjevIznosi[]>(this.baseUrl + 'Zahtjevi/allOdobreneZahtjeve', { params });
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
