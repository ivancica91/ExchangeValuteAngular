import { RolesModalComponent } from './../../modals/roles-modal/roles-modal.component';
import { PutRole } from './../../_models/role';
import { MembersService } from './../../_services/members.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '@full-fledged/alerts';
import { ToastrService } from 'ngx-toastr';
import { ProgressbarService } from 'src/app/_services/progressbar.service';
import { Role } from 'src/app/_models/role';
import { of } from 'rxjs';
import { Member } from 'src/app/_models/member';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-member-edit-role',
  templateUrl: './member-edit-role.component.html',
  styleUrls: ['./member-edit-role.component.css']
})
export class MemberEditRoleComponent implements OnInit {
  members: Partial<Member[]>;
  bsModalRef: BsModalRef;

  constructor(private membersService: MembersService,private modalService: BsModalService) {
 }


  ngOnInit(): void {
    this.getMembersWithRoles();
  }

  getMembersWithRoles() {
    this.membersService.getMembersWithRoles().subscribe(members => {
      this.members = members;
    })
  }

  openRolesModal(member: Member) {
    const config = {
      class: 'modal-dialog-centered',
      initialState: {
        member,
        roles: this.getRolesArray(member)
      }
    }
    this.bsModalRef = this.modalService.show(RolesModalComponent, config);
    this.bsModalRef.content.updateSelectedRoles.subscribe(values => {
      const rolesToUpdate = {
        roles: [...values.filter(el => el.checked === true).map(el => el.name)]
      };
      if (rolesToUpdate) {
        this.membersService.updateMemberRoles(member.userName, rolesToUpdate.roles).subscribe(() => {
          member.roles = [...rolesToUpdate.roles]
        })
      }
    })
  }

  private getRolesArray(member) {
    const roles = [];
    const userRoles = member.roles;
    const availableRoles: any[] = [
      {name: 'administrator', value: 'administrator'},
      {name: 'moderator', value: 'moderator'},
      {name: 'korisnik', value: 'korisnik'}
    ];

    availableRoles.forEach(role => {
      let isMatch = false;
      for (const userRole of userRoles) {
        if (role.name === userRole) {
          isMatch = true;
          role.checked = true;
          roles.push(role);
          break;
        }
      }
      if (!isMatch) {
        role.checked = false;
        roles.push(role);
      }
    })
    return roles;
  }
}
