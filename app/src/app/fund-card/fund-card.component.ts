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

  ngOnInit() {}

}
