import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PortfoliosComponent } from './portfolios/portfolio.component';
import { RouterModule, Routes} from '@angular/router';
import { FormComponent } from './portfolios/form.component';
import { FormsModule } from '@angular/forms';
import { PortfolioService } from './portfolios/portfolio.service';
import { HttpClientModule } from '@angular/common/http';
import { ResumeComponent } from './portfolios/resume.component';

const routes: Routes = [
  {path: '', redirectTo: '/portfolios', pathMatch: 'full'},
  {path: 'portfolios', component: PortfoliosComponent},
  {path: 'portfolios/form', component: FormComponent},
  {path: 'portfolios/form/:id', component: FormComponent},
  {path: 'portfolios/resume/:id', component: ResumeComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortfoliosComponent,
    FormComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
