import { MembersService } from './../../_services/members.service';
import { User } from './../../_models/user';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  members$: Observable<User[]>;
  constructor(private membersService: MembersService) { }

  ngOnInit(): void {
    this.members$ = this.membersService.getMembers();
  }

  // getMembers(): void {
  //   this.membersService.getMembers()
  //   .subscribe(
  //     data => {
  //       this.members = data;
  //       console.log(data);
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }

}
