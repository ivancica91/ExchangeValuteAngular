import { OdobravanjeZahtjeva } from './../../_models/zahtjev';
import { ZahtjeviService } from './../../_services/zahtjevi.service';
import { Component, OnInit } from '@angular/core';
import { Zahtjev } from 'src/app/_models/zahtjev';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zahtjevi-svi',
  templateUrl: './zahtjevi-svi.component.html',
  styleUrls: ['./zahtjevi-svi.component.css']
})
export class ZahtjeviSviComponent implements OnInit {
  zahtjevi: Zahtjev[];
  odobravanjeZahtjeva: OdobravanjeZahtjeva;
  odobriForm: FormGroup;

  constructor(private zahtjeviService: ZahtjeviService,private formBuilder: FormBuilder, private http: HttpClient,
    private router: Router, private toastr: ToastrService) {
    this.odobriForm = this.formBuilder.group({
      zahtjevId: new FormControl('', [Validators.required]),
      prihvacen: new FormControl(2, [Validators.required])})
 }


  ngOnInit(): void {
    this.getAllZahtjeve();
  }

  getAllZahtjeve(): void {
    this.zahtjeviService.getAll()
    .subscribe(
      data => {
        this.zahtjevi = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }

  onSubmit() {

    this.zahtjeviService.odobravanjeZahtjeva(this.odobriForm.value).subscribe(response => {
      this.ngOnInit();
      this.toastr.success('Zahtjev uspješno prihvaćen.')
    },
    (error) => {
      console.log(error);
      this.toastr.warning('Neuspješno slanje zahtjeva za prodaju valute, provjerite upisane podatke.')
    });
  };



}
