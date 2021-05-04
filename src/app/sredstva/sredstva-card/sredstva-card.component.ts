import { SredstvaService } from './../../_services/sredstva.service';
import { Component, Input, OnInit } from '@angular/core';
import { Sredstva } from 'src/app/_models/sredstva';
import { ActivatedRoute } from '@angular/router';
import { Protuvrijednost } from 'src/app/_models/Protuvrijednost';

@Component({
  selector: 'app-sredstva-card',
  templateUrl: './sredstva-card.component.html',
  styleUrls: ['./sredstva-card.component.css']
})
export class SredstvaCardComponent implements OnInit {
  @Input() sredstva: Sredstva; protuvrijednosti: Protuvrijednost
  protuvrijednos: Protuvrijednost[]

  isShowDiv = false;
  constructor(private route: ActivatedRoute, private sredstvaService: SredstvaService) { }

  ngOnInit(): void {
  }

  // getProtuvrijednosti(): void {
  //   this.sredstvaService.getProtuvrijednost()
  //   .subscribe(
  //     data => {
  //       this.protuvrijednos = data;
  //       console.log(data);
  //       this.isShowDiv = !this.isShowDiv;
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   )
  // }


}
