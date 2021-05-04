import { Zahtjev } from './../_models/zahtjev';
import { ZahtjeviService } from './../_services/zahtjevi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zahtjevi',
  templateUrl: './zahtjevi.component.html',
  styleUrls: ['./zahtjevi.component.css']
})
export class ZahtjeviComponent implements OnInit {

  constructor(private zahtjeviService : ZahtjeviService) { }
  zahtjevi?: Zahtjev[];


  ngOnInit(): void {
    this.getZahtjeveByUser();
  }

  getZahtjeve(): void {
    this.zahtjeviService.getAll()
    .subscribe(
      data => {
        this.zahtjevi = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }

  getZahtjeveByUser(): void {
    this.zahtjeviService.getZahtjeveByLoggedUser()
    .subscribe(
      data => {
        this.zahtjevi = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }


}
