import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Portfolio } from './portfolio';
import { PortfolioService } from './portfolio.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html'
})
export class ResumeComponent implements OnInit {

  public portfolio: Portfolio = new Portfolio();
  public title: string = "Resume!";

  constructor(private portfolioService: PortfolioService,
    private router: Router,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarPorfolio()
  }

  cargarPorfolio(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.portfolioService.getPortfolio(id).subscribe( (portfolio) => this.portfolio = portfolio)
      }
    })
  }

}
