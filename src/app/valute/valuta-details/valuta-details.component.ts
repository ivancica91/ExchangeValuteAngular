import { Observable } from 'rxjs';
import { ValuteService } from './../../_services/valute.service';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PutTecaj, Valuta } from 'src/app/_models/valuta';
import { Himna } from 'src/app/_models/himna';

@Component({
  selector: 'app-valuta-details',
  templateUrl: './valuta-details.component.html',
  styleUrls: ['./valuta-details.component.css']
})
export class ValutaDetailsComponent implements OnInit {
  @ViewChild('audioOption') audioPlayerRef: ElementRef;
valuta: Valuta
himna: Himna;
valutaId: number;
putTecaj: PutTecaj;

  constructor(
    private valuteService: ValuteService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.valutaId =+this.route.snapshot.paramMap.get('valutaId'); // bez + cita kao string i ne valja
    this.loadValuta();
    this.loadHimna();

    }


  loadValuta() {
    this.valuteService.getValuta(this.valutaId).subscribe(valuta => {
      this.valuta = valuta;
      console.log(valuta);
    });
  }


  loadHimna() {
    this.valuteService.getHimnaByValutaId(this.valutaId).subscribe(himna => {
      this.himna = himna;
      console.log(himna);
    },
    error => {
      console.log(error);
    });
  }

  // onAudioPlay(){
  //   this.audioPlayerRef.nativeElement.play();
  // }

  // putTecajValute() {
  //   this.valuteService.putTecajValute(this.putTecaj.valutaId).subscribe(tecaj => {
  //     this.putTecaj = tecaj;

  //   })
  // }





}
