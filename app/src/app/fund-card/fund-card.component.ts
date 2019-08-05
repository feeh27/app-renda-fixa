import { Component, OnInit, Input } from '@angular/core';

import { Fund } from '../fund';

@Component({
  selector: 'app-fund-card',
  templateUrl: './fund-card.component.html',
  styleUrls: ['./fund-card.component.scss']
})
export class FundCardComponent implements OnInit {
  @Input() fund: Fund;

  constructor() { }

  ngOnInit() {
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
    this.fund = fund;
  }

}
