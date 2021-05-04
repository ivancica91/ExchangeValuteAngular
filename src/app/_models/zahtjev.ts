import { Valuta } from "./valuta";

  export interface Zahtjev {
        zahtjevId: number;
        korisnikId: number;
        iznos: number;
        prodajemValutaId: number;
        kupujemValutaId: number;
        datumVrijemeKreiranja: Date;
        prihvacen: number;
        valuta: Valuta;
    }


