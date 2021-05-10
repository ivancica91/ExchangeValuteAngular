import { ActivatedRoute } from '@angular/router';
import { MembersService } from './../../_services/members.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { take } from 'rxjs/operators';
import { Member } from 'src/app/_models/member';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  user: User;
  member: Member;
  id: number;

  constructor(private authService: AuthService, private membersService: MembersService, private route: ActivatedRoute, private toastr: ToastrService) {
    this.authService.currentUser$.pipe(take(1)).subscribe(user => this.user = user);
  }

  ngOnInit(): void {
    this.id =+this.route.snapshot.paramMap.get('id');
    this.loadUser();
  }


  loadUser() {
    this.membersService.getUser(this.user.id).subscribe(user => {
      this.user = user;
    });
  }

  updateUser() {
    this.membersService.updateUser(this.id,this.user).subscribe(() => {
      this.toastr.success('Profil editiran.');
      this.editForm.reset(this.user);  // apdejtan korisnik nakon submitanja
    });
  }

}
