import { SredstvaService } from './../../_services/sredstva.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PostSredstva, Sredstva } from 'src/app/_models/sredstva';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sredstva-edit',
  templateUrl: './sredstva-edit.component.html',
  styleUrls: ['./sredstva-edit.component.css']
})
export class SredstvaEditComponent implements OnInit {
  sredstvaForm: FormGroup;
  sredstva: Sredstva;
  postSredstva: PostSredstva;


  constructor(private sredstvaService: SredstvaService, private formBuilder: FormBuilder, private http: HttpClient,private router: Router, private toastr: ToastrService) {
    this.sredstvaForm = this.formBuilder.group({
      valuta: new FormControl('', [Validators.required]),
      iznos: new FormControl('', [Validators.required])});

  }

  ngOnInit(): void {
  }

  onSubmit() {

    this.sredstvaService.putSredstvaByLoggedUser(this.sredstvaForm.value).subscribe(response => {
      this.router.navigateByUrl('sredstva');
      this.toastr.success('Sredstva uspješno ažurirana.')
    },
    (error) => {
      console.log(error);
      this.toastr.warning('Ne posjedujete sredstva u traženoj valuti!')
    });
  };


}
