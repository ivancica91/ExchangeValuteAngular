import { Observable } from 'rxjs';
import { ValuteService } from './../../_services/valute.service';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PutTecaj, Valuta } from 'src/app/_models/valuta';
import { Himna } from 'src/app/_models/himna';
import { AuthService } from 'src/app/_services/auth.service';
import { ToastrService } from 'ngx-toastr';

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
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.valutaId =+this.route.snapshot.paramMap.get('valutaId'); // bez + cita kao string i ne valja
    this.loadValuta();
    // this.getId();
    // this.loadHimna();

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

  putTecajValute() {
    this.valuteService.putTecajValute(this.valutaId).subscribe(valuta => {
      this.valuta = valuta;
      console.log(valuta);
      this.toastr.success("Tečaj uspješno ažuriran.")
      this.reloadCurrentPage();


    },
    error => {
      console.log(error);
      this.toastr.warning(error.error);
    });
  }

  reloadCurrentPage() {
    window.location.reload();
   }

   // ideja bila da usporedi Id ulogiranog usera i Id-a usera koji je zaduzen za valutu, ako su isti, pokazi gumb za azuriranje tecaja
   getId(){
    var data = localStorage.getItem('id');
    console.log(data)
   }

}
