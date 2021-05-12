import { ValuteService } from './../../_services/valute.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PostValuta, Valuta } from 'src/app/_models/valuta';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-valuta-add',
  templateUrl: './valuta-add.component.html',
  styleUrls: ['./valuta-add.component.css']
})
export class ValutaAddComponent implements OnInit {
  valutaForm: FormGroup;
  valuta: Valuta;
  postValuta: PostValuta;

  constructor(private valuteService: ValuteService, private formBuilder: FormBuilder, private http: HttpClient,
    private router: Router, private toastr: ToastrService) {
      this.valutaForm = this.formBuilder.group({
        userName: new FormControl('', [Validators.required]),
        naziv: new FormControl('', [Validators.required]),
        slikaValute: new FormControl(''),
        aktivnoOd: new FormControl('', [Validators.required]),
        aktivnoDo: new FormControl('', [Validators.required]),
      })
    }

  ngOnInit(): void {
  }

  onSubmit() {

    this.valuteService.postValuta(this.valutaForm.value).subscribe(response => {
      this.router.navigateByUrl('valute');
      this.toastr.success('Valuta uspješno dodana.')

    },
    (error) => {
      console.log(error);
      this.toastr.warning(error);
    });
  };

}
