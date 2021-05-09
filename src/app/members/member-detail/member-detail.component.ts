import { ActivatedRoute } from '@angular/router';
import { MembersService } from './../../_services/members.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { take } from 'rxjs/operators';
import { Member } from 'src/app/_models/member';

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

  constructor(private authService: AuthService, private membersService: MembersService, private route: ActivatedRoute) {
    this.authService.currentUser$.pipe(take(1)).subscribe(user => this.user = user);
  }

  ngOnInit(): void {
    this.id =+this.route.snapshot.paramMap.get('id');
    this.loadUser();
  }


  loadUser() {
    this.membersService.getMember(this.user.id).subscribe(member => {
      this.member = member;
    });
  }

  updateUser() {
    this.membersService.updateMember(this.id,this.member).subscribe(() => {
      // this.toastr.success('Profil editiran.');
      this.editForm.reset(this.member);  // apdejtan korisnik nakon submitanja
    });
  }

}
