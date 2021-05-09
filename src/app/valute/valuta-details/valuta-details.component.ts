import { Drzava } from './../../_models/drzava';
import { Observable } from 'rxjs';
import { ValuteService } from './../../_services/valute.service';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PutTecaj, Valuta } from 'src/app/_models/valuta';
import { Himna } from 'src/app/_models/himna';
import { AuthService } from 'src/app/_services/auth.service';
import { ToastrService } from 'ngx-toastr';
// import * as L from 'leaflet';

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
lat: string;
lng: string;
drzava: Drzava;
// private map: L.Map;


// private centroid: L.LatLngExpression= [45.06463158257005, 14.778615263851686]; // Hrvatska


// private initMap(): void {
//   this.map = L.map('map', {
//     center: this.centroid,
//     zoom: 8
//   });

//   const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       maxZoom: 18,
//       minZoom: 10,
//       attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//     });

//     // create 5 random jitteries and add them to map
//     const jittery = Array(5).fill(this.centroid).map(
//         x => [x[0] + (Math.random() - .5)/10, x[1] + (Math.random() - .5)/10 ]
//       ).map(
//         x => L.marker(x as L.LatLngExpression)
//       ).forEach(
//         x => x.addTo(this.map)
//       );

//     tiles.addTo(this.map);

//   }


  constructor(
    private valuteService: ValuteService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.valutaId =+this.route.snapshot.paramMap.get('valutaId'); // bez + cita kao string i ne valja
    this.loadValuta();
    this.loadDrzava()
    // this.initMap();
    // this.getId();
    // this.loadHimna();
    }


    private loadDrzava() {
      this.valuteService.getDrzavaByValutaId(this.valutaId).subscribe(drzava => {
        this.drzava = drzava;
        console.log(drzava);
      },
      error => {
        console.log(error);
      });
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

  //  options = {
  //   layers: [
  //       tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
  //   ],
  //   zoom: 5,
  //   // center: latLng(46.879966, -121.726909)
  //   center: latLng(this.loadDrzava., -121.726909)
  // };










}
