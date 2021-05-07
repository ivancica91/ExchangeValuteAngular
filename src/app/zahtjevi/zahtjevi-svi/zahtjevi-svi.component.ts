import { ZahtjeviService } from './../../_services/zahtjevi.service';
import { Component, OnInit } from '@angular/core';
import { Zahtjev } from 'src/app/_models/zahtjev';

@Component({
  selector: 'app-zahtjevi-svi',
  templateUrl: './zahtjevi-svi.component.html',
  styleUrls: ['./zahtjevi-svi.component.css']
})
export class ZahtjeviSviComponent implements OnInit {
  zahtjevi: Zahtjev[];

  constructor(private zahtjeviService: ZahtjeviService) { }

  ngOnInit(): void {
    this.getAllZahtjeve();
  }

  getAllZahtjeve(): void {
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


}
