import { map } from 'rxjs/operators';
import { PostValuta, PutTecaj, Valuta } from 'src/app/_models/valuta';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, pipe } from 'rxjs';
import { Himna } from '../_models/himna';

@Injectable({
  providedIn: 'root'
})
export class ValuteService {
  baseUrl = environment.apiUrl;

  valute: Valuta[] = [];
  himna: Himna;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Valuta[]> {
    return this.http.get<Valuta[]>(this.baseUrl + 'Valute/popisValuta');
  }

  getValuta(valutaId: number) {
    const valuta = this.valute.find(v => v.valutaId === valutaId);
    if (valuta !== undefined) return of (valuta);
    return this.http.get<Valuta>(this.baseUrl + 'Valute/' + valutaId);
  }

  updateValuta(valutaId: number, valuta: PostValuta): Observable<any> {
    return this.http.put(this.baseUrl + 'Valute/AzurirajValutu/' + valutaId, valuta)
  }

  getHimnaByValutaId(valutaId: number): Observable<Himna> {
    const valuta = this.valute.find(v => v.valutaId === valutaId);
    return this.http.get<Himna>(this.baseUrl + 'Drzave/HimnaByDrzavaId/' + valutaId);
  }

  postValuta(postValuta: PostValuta): Observable<PostValuta> {
    return this.http.post<PostValuta>(this.baseUrl + 'Valute/DodajValutu', postValuta)
    .pipe(
      map((response) => response)
    );
  }

  // ovo ne radi, smisli kako
  // putTecajValute( putTecaj: PutTecaj): Observable<any> {
  //   return this.http.put<PutTecaj>(this.baseUrl + 'Valute/AzurirajTecaj', putTecaj);
  // }

  putTecajValute( valutaId: number): Observable<any> {
    return this.http.put<any>(this.baseUrl + 'Valute/AzurirajTecaj/' + valutaId, null);
  }


  valuteToXml(): Observable<any> {
    return this.http.get<void>(this.baseUrl + 'Valute/valuteToXml');
  }

  valuteFromXml(): Observable<any> {
    return this.http.put<void>(this.baseUrl + 'Valute/ValuteFromXml', null);
  }







}
