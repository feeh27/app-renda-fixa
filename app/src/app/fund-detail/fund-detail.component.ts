import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { first } from 'rxjs/operators';

import { FundDetail } from '../fund-detail';
import { FundDetailService } from '../fund-detail.service';

@Component({
  selector: 'app-fund-detail',
  templateUrl: './fund-detail.component.html',
  styleUrls: ['./fund-detail.component.scss']
})
export class FundDetailComponent implements OnInit {
  fundDetail: FundDetail;

  constructor(
    private route: ActivatedRoute,
    private fundDetailService: FundDetailService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.getFundDetail();
    if (this.fundDetail === undefined) {
      console.log('Detalhes do fundo não encontrado!');
    }
  }

  getFundDetail(): void {
    const param = +this.route.snapshot.paramMap.get('cnpj');
    const cnpj = param.toString().replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    this.fundDetailService.searchFundsDetail(cnpj).pipe(
      first(),
    ).subscribe(fundDetail => this.fundDetail = fundDetail[0], err => console.log('Error', err));
  }

  goBack(): void {
    this.location.back();
  }
}
