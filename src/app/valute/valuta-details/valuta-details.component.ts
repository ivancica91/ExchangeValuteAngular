import { map } from 'rxjs/operators';
import { Drzava } from './../../_models/drzava';
import { Observable } from 'rxjs';
import { ValuteService } from './../../_services/valute.service';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PutTecaj, Valuta } from 'src/app/_models/valuta';
import { Himna } from 'src/app/_models/himna';
import { AuthService } from 'src/app/_services/auth.service';
import { ToastrService } from 'ngx-toastr';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj';



@Component({
  selector: 'app-valuta-details',
  templateUrl: './valuta-details.component.html',
  styleUrls: ['./valuta-details.component.css']
})
export class ValutaDetailsComponent implements OnInit {
  @ViewChild('audioOption') audioPlayerRef: ElementRef;
  @Input() sirina: string; duljina: string;


valuta: Valuta
himna: Himna;
valutaId: number;
putTecaj: PutTecaj;
drzava: Drzava
map: Map;
long: number;
lat: number;





  constructor(
    private valuteService: ValuteService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.valutaId =+this.route.snapshot.paramMap.get('valutaId'); // bez + cita kao string i ne valja
    this.loadValuta();
    this.loadDrzava();
    }


    private loadDrzava() {
      this.valuteService.getDrzavaByValutaId(this.valutaId).subscribe(drzava => {
        this.drzava = drzava;
        console.log(drzava);
        this.duljina = this.drzava.duljina
        this.sirina = this.drzava.sirina
        var long = parseFloat(this.duljina);
        var lat = parseFloat(this.sirina);
        console.log(long);
        console.log(lat);

        this.map = new Map({
          view: new View({
            center: fromLonLat([long, lat]),
            zoom: 6,
          }),
          layers: [
            new TileLayer({
              source: new OSM(),
            }),
          ],
          target: 'map',

        });
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






