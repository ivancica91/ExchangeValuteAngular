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

const routes: Routes = [
  { path: '', redirectTo: 'valute', pathMatch: 'full' },
  { path: 'valute', component: ValuteListComponent },
  { path: 'valuta/:valutaId', component: ValutaDetailsComponent },
  { path: 'zahtjevi', component: ZahtjeviComponent },
  { path: 'zahtjevi/:id', component: ZahtjeviComponent },
  { path: 'zahtjev/novi', component: AddZahtjevComponent },
  { path: 'sredstva', component: SredstvaComponent },
  { path: 'sredstva/nova', component: AddSredstvaComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'korisnici', component: MemberListComponent },
  { path: 'korisnici/:id', component: MemberDetailComponent },



  //dodati i members
  { path: '**', component: ValuteListComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
