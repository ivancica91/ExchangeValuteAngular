import { SredstvaService } from './../_services/sredstva.service';
import { Component, OnInit } from '@angular/core';
import { Sredstva } from '../_models/sredstva';
import { Protuvrijednost } from '../_models/protuvrijednost';

@Component({
  selector: 'app-sredstva',
  templateUrl: './sredstva.component.html',
  styleUrls: ['./sredstva.component.css']
})
export class SredstvaComponent implements OnInit {
  sredstva?: Sredstva[];
  // protuvrijednosti?: Protuvrijednost[];
  // isShowDiv = false;



  constructor(private sredstvaService: SredstvaService) { }

  ngOnInit(): void {
    this.getSredstva();
  }

  getSredstva(): void {
    this.sredstvaService.getSredstva()
    .subscribe(
      data => {
        this.sredstva = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }

  //   getProtuvrijednosti(): void {
  //   this.sredstvaService.getProtuvrijednost()
  //   .subscribe(
  //     data => {
  //       this.protuvrijednosti = data;
  //       console.log(data);
  //       this.isShowDiv = !this.isShowDiv;
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   )
  // }

}
