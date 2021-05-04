import { AlertService } from '@full-fledged/alerts';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
model: any = {}

  constructor(public authService: AuthService, private router: Router, private alertService: AlertService) { }

  ngOnInit(): void {
  }


  login() {
    this.authService.login(this.model).subscribe(response => {
      this.router.navigateByUrl('Valute');
    }, error => {
      console.log(error);
      this.alertService.warning(error.error);
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }

}
