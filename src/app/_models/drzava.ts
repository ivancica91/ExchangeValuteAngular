import { Valuta } from "./valuta";


export interface Drzava {
  drzavaId?: number;
  valutaId?: number;
  naziv?: string;
  sirina?: string;
  duljina?: string;
  slika?: string;
  himna?: string;
  valuta?: Valuta;
}
