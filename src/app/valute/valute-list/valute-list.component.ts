import { ValuteService } from './../../_services/valute.service';
import { Valuta } from './../../_models/valuta';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-valute-list',
  templateUrl: './valute-list.component.html',
  styleUrls: ['./valute-list.component.css']
})
export class ValuteListComponent implements OnInit {
  valute?: Valuta[];
  // currentValuta?: Valuta;


  constructor(private valuteService:ValuteService) { }

  ngOnInit(): void {
    this.getValute();
  }

  getValute(): void {
    this.valuteService.getAll()
    .subscribe(
      data => {
        this.valute = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  // setActiveValuta(valuta: Valuta): void {
  //   this.currentValuta = valuta;
  //   // postavi ovdje index sa https://bezkoder.com/angular-11-crud-app/  i nastavi dalje
  // }

}
