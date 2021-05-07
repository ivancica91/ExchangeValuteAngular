import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from '@full-fledged/alerts';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.css']
})
export class ConfirmEmailComponent implements OnInit {
  emailConfirmed: boolean = false;
  urlParams: any = {};

  constructor( private route: ActivatedRoute,
    private authService: AuthService,
    private alertService: AlertService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.urlParams.token = this.route.snapshot.queryParamMap.get('token');
    this.urlParams.userid = this.route.snapshot.queryParamMap.get('userid');
    this.confirmEmail();
  }

  confirmEmail() {
    this.authService.confirmEmail(this.urlParams).subscribe(
      () => {
        console.log('success');
        this.toastr.success('Email potvrđen');
        this.emailConfirmed = true;
      },
      (error) => {
        console.log(error);
        this.toastr.warning('Nije moguće potvrditi email');
        this.emailConfirmed = false;
      }
    );
  }

}
