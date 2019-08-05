import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FundsComponent } from './funds/funds.component';
import { FundDetailComponent } from './fund-detail/fund-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/funds', pathMatch: 'full' },
  { path: 'funds', component: FundsComponent },
  { path: 'fund-detail/:cnpj', component: FundDetailComponent },
  { path: 'fund-detail/id/:id', component: FundDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
