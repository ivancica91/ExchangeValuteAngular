import { ZahtjeviService } from './../../_services/zahtjevi.service';
import { Component, Input, OnInit } from '@angular/core';
import { Zahtjev } from 'src/app/_models/zahtjev';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-zahtjev-card',
  templateUrl: './zahtjev-card.component.html',
  styleUrls: ['./zahtjev-card.component.css']
})
export class ZahtjevCardComponent implements OnInit {
  @Input()
  zahtjev: Zahtjev

  constructor(private route: ActivatedRoute, private zahtjevService: ZahtjeviService) { }

  ngOnInit(): void {
  }

}
