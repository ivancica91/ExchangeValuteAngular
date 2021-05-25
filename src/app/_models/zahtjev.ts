import { Valuta } from "./valuta";

  export interface Zahtjev {
        zahtjevId: number;
        korisnikId: number;
        iznos: number;
        prodajemValutaId: number;
        prodajemValuta: string;
        kupujemValutaId: number;
        kupujemValuta: string;
        datumVrijemeKreiranja: Date;
        prihvacen: number;
        valuta: Valuta;
    }

    export interface PostZahtjev {
      iznos: number;
      prodajemvaluta: string;
      kupujemValuta: string;
  }

  export interface OdobravanjeZahtjeva {
    zahtjevId: number;
    prihvacen: number;
}

export interface DateRange {
  from: Date;
  to: Date;
}

export interface OdobreniZahtjevIznosi {
  valutaId: number;
  naziv: string;
  iznos: number;

}






