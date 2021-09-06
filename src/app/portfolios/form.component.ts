import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Portfolio } from './portfolio';
import { PortfolioService } from './portfolio.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  public portfolio: Portfolio = new Portfolio();
  public title: string = "Create Portfolio";

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

  create(): void {
    this.portfolioService.create(this.portfolio)
      .subscribe(portfolio => {
        this.router.navigate(['/portfolios'])
        swal.fire('New portfolio', `Porfolio created successfully!`, 'success')
      }
      );
  }

  update():void{
    this.portfolioService.update(this.portfolio)
    .subscribe( portfolio => {
      this.router.navigate(['/portfolios'])
      swal.fire('Portfolio updated', `Porfolio update successfully`, 'success')
    }

    )
  }

}
