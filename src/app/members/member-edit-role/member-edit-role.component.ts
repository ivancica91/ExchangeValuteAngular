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
  // roleForm: FormGroup;
  // role: Role[];
  // putRole: PutRole;
  members: Partial<Member[]>;
  bsModalRef: BsModalRef;

  constructor(private http: HttpClient, private membersService: MembersService,private modalService: BsModalService, private router: Router, private toastr: ToastrService,
    private progressService: ProgressbarService, private alertService: AlertService, private formBuilder: FormBuilder) {
      // this.roleForm = this.formBuilder.group({
      //   userName: ['', [Validators.required]],
      //   roles: ['', [Validators.required]],

        // roles: ['']
    // });

  //   of(this.getRoles()).subscribe(roles => {
  //     this.roles = roles;
  //   });
 }


  ngOnInit(): void {
    // this.getMembersWithRoles();
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
      {name: 'Administrator', value: 'Administrator'},
      {name: 'Moderator', value: 'Moderator'},
      {name: 'Korisnik', value: 'Korisnik'}
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

  // getMembersWithRoles(): void {
  //   this.membersService.getMembersWithRoles()
  //   .subscribe(
  //     roles => {
  //       this.role = roles;
  //       console.log(roles);
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   )
  // }


  // getRoles() {
  //   return [
  //     { id: '2', name: 'moderator' },
  //     { id: '3', name: 'korisnik 2' },
  //   ];
  // }

  // onSubmit() {
  //   this.membersService.editRoles(this.roleForm.value).subscribe(response => {
  //     this.ngOnInit();
  //     this.toastr.success('Uloge uspješno promijenjene.')
  //   },
  //   (error) => {
  //     console.log(error);
  //     this.toastr.warning('Neuspješna promjena uloga')
  //   });

  // }

}
