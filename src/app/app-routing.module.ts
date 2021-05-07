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

const routes: Routes = [
  { path: '', redirectTo: 'valute', pathMatch: 'full' },
  { path: 'valute', component: ValuteListComponent },
  { path: 'valuta/:valutaId', component: ValutaDetailsComponent },
  { path: 'valuta/:valutaId/edit', component: ValutaEditComponent },
  { path: 'valute/nova', component: ValutaAddComponent },
  { path: 'zahtjevi', component: ZahtjeviComponent },
  { path: 'zahtjevi/novi', component: AddZahtjevComponent },
  { path: 'zahtjevi/svi', component: ZahtjeviSviComponent },
  { path: 'zahtjevi/odobreni', component: ZahtjeviOdobreniComponent },
  { path: 'zahtjevi/odobravanje', component: ZahtjeviOdobravanjeComponent },
  { path: 'sredstva', component: SredstvaComponent },
  { path: 'sredstva/nova', component: AddSredstvaComponent },
  { path: 'sredstva/azuriraj', component: SredstvaEditComponent },
  { path: 'sredstva/protuvrijednosti', component: ProtuvrijednostiComponent },
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
