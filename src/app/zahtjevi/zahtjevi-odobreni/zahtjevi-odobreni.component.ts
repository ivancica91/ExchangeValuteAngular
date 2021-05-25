import { ZahtjeviService } from 'src/app/_services/zahtjevi.service';
import { Component, OnInit } from '@angular/core';
import { DateRange, OdobreniZahtjevIznosi, Zahtjev } from 'src/app/_models/zahtjev';

@Component({
  selector: 'app-zahtjevi-odobreni',
  templateUrl: './zahtjevi-odobreni.component.html',
  styleUrls: ['./zahtjevi-odobreni.component.css']
})
export class ZahtjeviOdobreniComponent implements OnInit {
  odobreni: OdobreniZahtjevIznosi[];
  zahtjevi: Zahtjev[];
  from: Date;
  to: Date;
  id?: number = null;
  // minDate?: Date = null;
  // maxDate?: Date = null;

  constructor(private zahtjeviService: ZahtjeviService) {

  }

  ngOnInit(): void {
    // this.getOdobreneByDate(this.minDate, this.maxDate);
  }



  getOdobreneByDate(): void {

    // this.zahtjeviService.getAllOdobreneZahtjeve(this.id, this.minDate, this.maxDate)
    this.zahtjeviService.getAllOdobreneZahtjeve(this.from, this.to)
    .subscribe(
      odobren => {
        this.odobreni = odobren;
        console.log(this.from)
        console.log(this.to)
        console.log(odobren);

      },
      error => {
        console.log(error);
      }
    )

  }

}
