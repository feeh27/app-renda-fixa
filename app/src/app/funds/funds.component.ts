import { Component, OnInit } from '@angular/core';

import { Fund } from '../fund';
import { FundService} from '../fund.service';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.scss']
})
export class FundsComponent implements OnInit {
  funds: Fund[];

  constructor(
    private fundService: FundService,
  ) { }

  ngOnInit() {
    this.getFunds();
  }

  getFunds(): void {
    this.funds = this.fundService.getFunds();
  }

}
