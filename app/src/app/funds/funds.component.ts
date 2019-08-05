import { Component, OnInit } from '@angular/core';

import { Fund } from '../fund';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.scss']
})
export class FundsComponent implements OnInit {
  funds: Fund[];

  constructor() { }

  ngOnInit() {
    this.getFunds();
  }

  getFunds(): void {
    const fund = new Fund();
    fund.id = 1;
    fund.aplicacao_minima = 5000;
    fund.classe = 'Fundo Multimercado';
    fund.cnpj = '34.669.263/0001-56';
    fund.gestor = 'Ut enim ad minima veniam';
    fund.liquidez = 'D+1';
    fund.nome = 'at vero eos et accusamus et iusto odio dignissimos';
    fund.perfil = 'agressivo';
    fund.rentabilidade = 16.72;
    fund.score = '6.8';
    this.funds = [];
    this.funds.push(fund);
    this.funds.push(fund);
    this.funds.push(fund);
    this.funds.push(fund);
    this.funds.push(fund);
  }

}
