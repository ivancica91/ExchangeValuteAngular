import { MembersService } from './../../_services/members.service';
import { User } from './../../_models/user';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
  @Input() user: User;

  constructor(private membersService: MembersService) { }

  ngOnInit(): void {
  }

}
