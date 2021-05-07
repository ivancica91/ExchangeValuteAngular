import { Time } from "@angular/common";

export interface Valuta {
  valutaId: number;
  naziv: string;
  tecaj: number;
  slikaValute?: string;
}

export interface PostValuta {
  KorisnikId: number;
  naziv: string;
  slikaValute?: string;
  AktivnoOd: Time;
  AktivnoDo: Time;
}

export interface PutTecaj {
  valutaId: number;
}




