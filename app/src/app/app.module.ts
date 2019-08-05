import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import br from '@angular/common/locales/br';
import es from '@angular/common/locales/es';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FundDetailComponent } from './fund-detail/fund-detail.component';
import { FundsComponent } from './funds/funds.component';
import { FundCardComponent } from './fund-card/fund-card.component';
import { ClearCnpj } from './clear-cnpj.pipe';

registerLocaleData(br, 'pt');
registerLocaleData(es, 'es');

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false },
    ),
  ],
  declarations: [
    AppComponent,
    FundDetailComponent,
    FundsComponent,
    FundCardComponent,
    ClearCnpj,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
