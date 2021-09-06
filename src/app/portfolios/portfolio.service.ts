import { Injectable } from '@angular/core';
import { Portfolio } from './portfolio';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class PortfolioService {
  private urlEndPoint: string = "http://localhost:8080/api/portfolio"

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getPortfolios(): Observable<Portfolio[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Portfolio[] )
    )
  }

  create(portfolio: Portfolio) : Observable<Portfolio> {
    return this.http.post<Portfolio>(this.urlEndPoint, portfolio, {headers: this.httpHeaders})
  }

  getPortfolio(id): Observable<Portfolio>{
    return this.http.get<Portfolio>(`${this.urlEndPoint}/${id}`)
  }

  update(portfolio: Portfolio): Observable<Portfolio>{
    delete portfolio.twStatus;
    return this.http.put<Portfolio>(`${this.urlEndPoint}/${portfolio.id}`, portfolio, {headers: this.httpHeaders})
  }

  delete(id: number): Observable<Portfolio>{
    return this.http.delete<Portfolio>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }
}
