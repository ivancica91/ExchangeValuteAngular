import { HttpClient } from '@angular/common/http';
import { ValuteService } from './../../_services/valute.service';
import { Valuta } from './../../_models/valuta';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-valute-list',
  templateUrl: './valute-list.component.html',
  styleUrls: ['./valute-list.component.css']
})
export class ValuteListComponent implements OnInit {
  valute?: Valuta[];
  // currentValuta?: Valuta;


  constructor(private valuteService:ValuteService, private toastr: ToastrService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getValute();

        // hoce ako ovdje stavim pa pozove cim otvori stranicu, ali ne mogu dobiti da otvara na klik
    // this.valuteToXml();
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

  valuteToXml(): void {
    this.valuteService.valuteToXml()
    .subscribe (
      data => {
        this.valute = data;
        console.log(data);
        this.ngOnInit();
        this.toastr.success("Valute exportane u Xml file")
      },
      error => {
        console.log(error);
      }
    );
  }

  valuteFromXml(): void {
    this.valuteService.valuteFromXml()
    .subscribe (
      data => {
        this.valute = data;
        console.log(data);
        this.ngOnInit();
        this.toastr.success("Valute importane iz Xml file-a navedenog u backendu")
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
