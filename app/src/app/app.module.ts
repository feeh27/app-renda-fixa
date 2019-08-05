import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import br from '@angular/common/locales/br';
import es from '@angular/common/locales/es';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FundCardComponent } from './fund-card/fund-card.component';
import { FundsComponent } from './funds/funds.component';

registerLocaleData(br, 'pt');
registerLocaleData(es, 'es');

@NgModule({
  declarations: [
    AppComponent,
    FundCardComponent,
    FundsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
