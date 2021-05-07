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

  // update(id: any, data: any): Observable<any> {
  //   return this.http.put(`${this.baseUrl} +'Valute/' + ${id}`, data);
  // }

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

  putTecajValute( putTecaj: PutTecaj) {
    return this.http.put<PutTecaj>(this.baseUrl + 'Valute/AzurirajTecaj', putTecaj);

  }





}
