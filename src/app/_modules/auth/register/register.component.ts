import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AlertService } from '@full-fledged/alerts';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/_models/user';
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
  @Output() cancelRegister = new EventEmitter();
registerForm: FormGroup;
// validationErrors: string[];

  // model: any = {
  //   userName:null,
  //   email: null,
  //   ime: null,
  //   prezime: null,
  //   lozinka: null,
  //   potvrdiLozinku: null,
  //   slika: null
  // }

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
      this.toastr.warning(error)
      // this.validationErrors = error;
    })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

  // onSubmit() {
  //   // this.alertService.info('Creating new user');
  //   // // this.progressService.startLoading();

  //   // const registerObserver = {
  //   //   next: (x) => {
  //   //     // tu bi se trebao zazeleniti ovaj progress bar koji sma gore iskomentirao i javiti da je napravljen user, ali ako gore odkomentiram, javlja gresku start undefined
  //   //     this.progressService.setSuccess();
  //   //     this.alertService.success('Account Created');
  //   //     // this.progressService.completeLoading();
  //   //   },
  //   //   error: (err) => {
  //   //     this.progressService.setFailure();
  //   //     this.alertService.danger(err.error.errors[0].description);
  //   //     // this.progressService.completeLoading();
  //   //   },
  //   // };
  //   // this.authService.register(this.model).subscribe(registerObserver);

  //   this.authService.register(this.model).subscribe(response => {
  //     this.router.navigateByUrl('valute');
  //     this.toastr.success('Korisnik uspješno registriran. Na Vaš email stići će link za potvrdu registracije.')

  //   },
  //   (error) => {
  //     console.log(error);
  //     this.toastr.warning(error)
  //   });

  }






