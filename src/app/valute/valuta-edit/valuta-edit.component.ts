import { ActivatedRoute, Router } from '@angular/router';
import { ValuteService } from './../../_services/valute.service';
import { Valuta } from 'src/app/_models/valuta';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-valuta-edit',
  templateUrl: './valuta-edit.component.html',
  styleUrls: ['./valuta-edit.component.css']
})
export class ValutaEditComponent implements OnInit {
valutaForm: FormGroup;
valuta: Valuta;

  constructor(private activatedRoute: ActivatedRoute, private valuteService: ValuteService, private router: Router,
     private formBuilder: FormBuilder, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.valuteService.getValuta(params['valutaId'])
      .subscribe(Valuta => {
        this.valuta = Valuta;
        this.valutaForm.patchValue({...Valuta});
      })
    });

    this.valutaForm = this.formBuilder.group({
      korisnikId: new FormControl('', [Validators.required]),
      naziv: new FormControl('', [Validators.required]),
      slikaValute: new FormControl(''),
      aktivnoOd: new FormControl('', [Validators.required]),
      aktivnoDo: new FormControl('', [Validators.required]),
    })
  }

  onSubmit() {
    this.valuteService.updateValuta(this.valuta.valutaId, this.valutaForm.value)
    .subscribe(Valuta => {
      this.router.navigate(['valute']);
      this.toastr.success('Valuta uspješno ažurirana.')
    },
    (error) => {
      console.log(error);
      this.toastr.warning(error);
    }
    )
  }

}
