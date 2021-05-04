import { JwtInterceptor } from './_interceptors/jwt.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValuteListComponent } from './valute/valute-list/valute-list.component';
import { ValutaDetailsComponent } from './valute/valuta-details/valuta-details.component';
import { ValutaCardComponent } from './valute/valuta-card/valuta-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { ZahtjeviComponent } from './zahtjevi/zahtjevi.component';
import { SredstvaComponent } from './sredstva/sredstva.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './_modules/auth/register/register.component';
import { AlertModule } from '@full-fledged/alerts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ZahtjeviDetailsComponent } from './zahtjevi/zahtjevi-details/zahtjevi-details.component';
import { AddZahtjevComponent } from './zahtjevi/add-zahtjev/add-zahtjev.component';
import { ZahtjevCardComponent } from './zahtjevi/zahtjev-card/zahtjev-card.component';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { SredstvaCardComponent } from './sredstva/sredstva-card/sredstva-card.component';
import { AddSredstvaComponent } from './sredstva/add-sredstva/add-sredstva.component';

@NgModule({
  declarations: [
    AppComponent,
    ValuteListComponent,
    ValutaDetailsComponent,
    ValutaCardComponent,
    MemberListComponent,
    MemberDetailComponent,
    ZahtjeviComponent,
    SredstvaComponent,
    NavComponent,
    RegisterComponent,
    ZahtjeviDetailsComponent,
    AddZahtjevComponent,
    ZahtjevCardComponent,
    MemberCardComponent,
    SredstvaCardComponent,
    AddSredstvaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    AlertModule.forRoot({maxMessages: 5, timeout: 5000})
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
