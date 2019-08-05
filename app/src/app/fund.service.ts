import { Injectable } from '@angular/core';

import { Fund } from './fund';

@Injectable({
  providedIn: 'root'
})
export class FundService {

  constructor() { }

  /** GET funds from the server */
  getFunds(): Fund[] {
    const fund = this.getFund(1);
    const funds = [];
    funds.push(fund);
    funds.push(fund);
    funds.push(fund);
    return funds;
  }

  /** GET fund by id. Will 404 if id not found */
  getFund(id: number): Fund {
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
    return fund;
  }
}
