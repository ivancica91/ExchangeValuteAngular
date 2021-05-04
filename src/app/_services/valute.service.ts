import { Valuta } from 'src/app/_models/valuta';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValuteService {
  baseUrl = environment.apiUrl;
  // apiUrl: 'https://localhost:44313/api/'

  valute: Valuta[] = [];

  constructor(private http: HttpClient) { }

  getAll(): Observable<Valuta[]> {
    return this.http.get<Valuta[]>(this.baseUrl + 'Valute/popisValuta');
  }

  // getValuta(valutaId: number) : Observable<Valuta> {
  //   return this.http.get<Valuta>(this.baseUrl + 'Valute/' + valutaId);
  // }

  getValuta(valutaId: number) {
    const valuta = this.valute.find(v => v.valutaId === valutaId);
    if (valuta !== undefined) return of (valuta);
    return this.http.get<Valuta>(this.baseUrl + 'Valute/' + valutaId);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl} +'Valute/' + ${id}`, data);
  }



}
