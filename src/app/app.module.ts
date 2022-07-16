import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketComponent } from './components/reports/ticket/ticket.component';
import { HomeComponent } from './components/pages/home/home.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/shared/footer/footer.component';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { TranslateStatusPipe } from './pipes/translate-status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    HomeComponent,
    FooterComponent,
    FormatDatePipe,
    TranslateStatusPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
