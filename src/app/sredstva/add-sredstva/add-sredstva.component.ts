import { HttpClient } from '@angular/common/http';
import { SredstvaService } from './../../_services/sredstva.service';
import { PostSredstva, Sredstva } from './../../_models/sredstva';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-sredstva',
  templateUrl: './add-sredstva.component.html',
  styleUrls: ['./add-sredstva.component.css']
})
export class AddSredstvaComponent implements OnInit {
  sredstvaForm: FormGroup;
  sredstva: Sredstva;
  postSredstva: PostSredstva;

  constructor(private sredstvaService: SredstvaService,private formBuilder: FormBuilder, private http: HttpClient,private router: Router, private toastr: ToastrService) {
    this.sredstvaForm = this.formBuilder.group({
      valuta: new FormControl('', [Validators.required]),
      iznos: new FormControl('', [Validators.min(1)])});
   }

  ngOnInit(): void {
  }

  onSubmit() {

    this.sredstvaService.postSredstvaByLoggedUser(this.sredstvaForm.value).subscribe(response => {
      this.router.navigateByUrl('sredstva');
      this.toastr.success('Sredstva uspješno dodana.')

    },
    (error) => {
      console.log(error);
      this.toastr.warning('Već posjedujete sredstva u traženoj valuti, izaberite drugu valutu ili ažurirajte postojeću.')
    });
  };
}
