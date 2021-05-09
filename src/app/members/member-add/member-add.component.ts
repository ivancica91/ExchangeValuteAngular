import { MembersService } from './../../_services/members.service';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Member, PostMember } from 'src/app/_models/member';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.css']
})

export class MemberAddComponent implements OnInit{
  postMember: PostMember;
  member: Member;
  memberForm: FormGroup;

  constructor(private membersService: MembersService,private http: HttpClient,
     private router: Router, private toastr: ToastrService,private formBuilder: FormBuilder,) {
       this.memberForm = this.formBuilder.group({
        userName: new FormControl('', [Validators.required]),
        ime: new FormControl('', [Validators.required]),
        prezime: new FormControl(''),
        email: new FormControl('', [Validators.required]),
        slika: new FormControl('', [Validators.required]),
        lozinka: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8)])
       })
     }

     ngOnInit(): void {
     }

     onSubmit() {

      this.membersService.postMember(this.memberForm.value).subscribe(response => {
        this.router.navigateByUrl('korisnici');
        this.toastr.success('Korisnik uspješno dodan.')
      },
      (error) => {
        console.log(error);
        this.toastr.warning(error);
      });
    };





}
