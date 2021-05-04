import { Observable } from 'rxjs';
import { ValuteService } from './../../_services/valute.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Valuta } from 'src/app/_models/valuta';

@Component({
  selector: 'app-valuta-details',
  templateUrl: './valuta-details.component.html',
  styleUrls: ['./valuta-details.component.css']
})
export class ValutaDetailsComponent implements OnInit {
valuta: Valuta

  constructor(
    private valuteService: ValuteService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.loadValuta();
    }


  loadValuta() {
    this.valuteService.getValuta(this.valuta.valutaId).subscribe(valuta => {
      this.valuta = valuta;
      console.log(valuta);
    });
  }




}
