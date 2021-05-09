import { MembersService } from './../../_services/members.service';
import { Member } from './../../_models/member';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/_models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-member-edit',
  templateUrl: './admin-member-edit.component.html',
  styleUrls: ['./admin-member-edit.component.css']
})
export class AdminMemberEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  member: Member;
  user: User;
  id: number;

  constructor(private membersService: MembersService, private toastr: ToastrService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id =+this.route.snapshot.paramMap.get('id'); // bez + cita kao string i ne valja
    this.loadMember();
  }

  loadMember() {
    this.membersService.getMember(this.id).subscribe(member => {
      this.member = member;
      console.log(member);
    });
  }

  updateMemberById() {
    this.membersService.updateMember(this.member.id, this.member).subscribe(
      response => {
        this.toastr.success('Profil editiran.');
        this.router.navigate(['/korisnici']);
      }
    );
  }


}
