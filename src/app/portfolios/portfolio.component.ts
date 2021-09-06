import { Component, OnInit } from '@angular/core';
import { Portfolio } from './portfolio';
import { PortfolioService } from './portfolio.service';


@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolio.component.html'
})
export class PortfoliosComponent {

  portfolios: Portfolio[];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.portfolioService.getPortfolios().subscribe(
      portfolios => this.portfolios = portfolios
    );
  }

}
