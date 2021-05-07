import { ActivatedRoute } from '@angular/router';
import { ValuteService } from './../../_services/valute.service';
import { Valuta } from './../../_models/valuta';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-valuta-card',
  templateUrl: './valuta-card.component.html',
  styleUrls: ['./valuta-card.component.css']
})
export class ValutaCardComponent implements OnInit {
  @Input()
  valuta: Valuta;

  constructor(private valuteService: ValuteService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
}
