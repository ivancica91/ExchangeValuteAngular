import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PostZahtjev } from './../../_models/zahtjev';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ZahtjeviService } from 'src/app/_services/zahtjevi.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-zahtjev',
  templateUrl: './add-zahtjev.component.html',
  styleUrls: ['./add-zahtjev.component.css']
})
export class AddZahtjevComponent implements OnInit {
  zahtjevForm: FormGroup;
  postZahtjev: PostZahtjev;

  constructor(private zahtjeviService: ZahtjeviService, private formBuilder: FormBuilder, private http: HttpClient,
     private router: Router, private toastr: ToastrService) {
      this.zahtjevForm = this.formBuilder.group({
        prodajemValuta: new FormControl('', [Validators.required]),
        iznos: new FormControl('', [Validators.min(1)]),
        kupujemValuta: new FormControl('', [Validators.required])});
   }

  ngOnInit(): void {
  }

  onSubmit() {

    this.zahtjeviService.postZahtjevByLoggedUser(this.zahtjevForm.value).subscribe(response => {
      this.router.navigateByUrl('zahtjevi');
      this.toastr.success('Zahtjev uspješno predan moderatoru na odobravanje.')

    },
    (error) => {
      console.log(error);
      this.toastr.warning('Neuspješno slanje zahtjeva za prodaju valute, provjerite upisane podatke.')
    });
  };

}
