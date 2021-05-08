import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertService } from '@full-fledged/alerts';
import { AuthService } from 'src/app/_services/auth.service';
import { ProgressbarService } from 'src/app/_services/progressbar.service';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm: FormGroup;

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient, private authService: AuthService,private router: Router, private toastr: ToastrService,
     private progressService: ProgressbarService, private alertService: AlertService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.intitializeForm()
  }

  intitializeForm() {
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      ime: ['', Validators.required],
      prezime: ['', Validators.required],
      lozinka: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      potvrdiLozinku: ['', [Validators.required, this.matchValues('lozinka')]],
      slika: ['', Validators.required],
    })
  }



  matchValues(matchTo: string): ValidatorFn {
    return (control: AbstractControl) => {
      return control?.value === control?.parent?.controls[matchTo].value
        ? null : {isMatching: true}
    }
  }

  register() {
    this.authService.register(this.registerForm.value).subscribe(response => {
      this.toastr.success("Uspješna registracija, provjerite svoj email.")
      this.router.navigateByUrl('valute');
    }, error => {
      this.toastr.warning(error.message)
    })
  }

  cancel() {
    this.router.navigateByUrl('valute');
  }

  }






