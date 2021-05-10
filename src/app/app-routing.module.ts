import { LoggedInGuard } from './_guards/logged-in.guard';
import { ModeratorGuard } from './_guards/moderator.guard';
import { AdminGuard } from './_guards/admin.guard';
import { MemberEditRoleComponent } from './members/member-edit-role/member-edit-role.component';
import { AdminMemberEditComponent } from './members/admin-member-edit/admin-member-edit.component';
import { ConfirmEmailComponent } from './_modules/auth/confirm-email/confirm-email.component';
import { ValutaEditComponent } from './valute/valuta-edit/valuta-edit.component';
import { ValutaAddComponent } from './valute/valuta-add/valuta-add.component';
import { ZahtjeviOdobravanjeComponent } from './zahtjevi/zahtjevi-odobravanje/zahtjevi-odobravanje.component';
import { ZahtjeviOdobreniComponent } from './zahtjevi/zahtjevi-odobreni/zahtjevi-odobreni.component';
import { ZahtjeviSviComponent } from './zahtjevi/zahtjevi-svi/zahtjevi-svi.component';
import { ProtuvrijednostiComponent } from './sredstva/protuvrijednosti/protuvrijednosti.component';
import { SredstvaEditComponent } from './sredstva/sredstva-edit/sredstva-edit.component';
import { AddZahtjevComponent } from './zahtjevi/add-zahtjev/add-zahtjev.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { SredstvaComponent } from './sredstva/sredstva.component';
import { ZahtjeviComponent } from './zahtjevi/zahtjevi.component';
import { ValutaDetailsComponent } from './valute/valuta-details/valuta-details.component';
import { ValuteListComponent } from './valute/valute-list/valute-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './_modules/auth/register/register.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { AddSredstvaComponent } from './sredstva/add-sredstva/add-sredstva.component';
import { MemberAddComponent } from './members/member-add/member-add.component';

const routes: Routes = [
  { path: '', redirectTo: 'valute', pathMatch: 'full' },
  { path: 'valute', component: ValuteListComponent },
  { path: 'valuta/:valutaId', component: ValutaDetailsComponent },
  { path: 'valuta/:valutaId/edit', component: ValutaEditComponent ,canActivate: [AdminGuard]},
  { path: 'valute/nova', component: ValutaAddComponent ,canActivate: [AdminGuard]},
  { path: 'zahtjevi', component: ZahtjeviComponent ,canActivate: [LoggedInGuard]},
  { path: 'zahtjevi/novi', component: AddZahtjevComponent ,canActivate: [LoggedInGuard]},
  { path: 'zahtjevi/svi', component: ZahtjeviSviComponent ,canActivate: [ModeratorGuard]},
  { path: 'zahtjevi/odobreni', component: ZahtjeviOdobreniComponent ,canActivate: [AdminGuard]},
  { path: 'sredstva', component: SredstvaComponent ,canActivate: [LoggedInGuard]},
  { path: 'sredstva/nova', component: AddSredstvaComponent ,canActivate: [LoggedInGuard]},
  { path: 'sredstva/azuriraj', component: SredstvaEditComponent ,canActivate: [LoggedInGuard]},
  { path: 'sredstva/protuvrijednosti', component: ProtuvrijednostiComponent ,canActivate: [LoggedInGuard]},
  { path: 'register', component: RegisterComponent },
  { path: 'confirmemail', component: ConfirmEmailComponent },
  { path: 'korisnici', component: MemberListComponent ,canActivate: [AdminGuard]},
  { path: 'korisnici/:id', component: AdminMemberEditComponent ,canActivate: [LoggedInGuard]},
  { path: 'korisnik/edit', component: MemberDetailComponent ,canActivate: [LoggedInGuard]},
  { path: 'korisnik/novi', component: MemberAddComponent ,canActivate: [AdminGuard]},
  { path: 'korisnik/role', component: MemberEditRoleComponent ,canActivate: [AdminGuard]},
  { path: '**', component: ValuteListComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
