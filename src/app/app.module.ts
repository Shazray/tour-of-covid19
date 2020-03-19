import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContatoreComponent } from './components/contatore/contatore.component';
import { ChartNazionaleComponent } from './components/chart-nazionale/chart-nazionale.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';
import { DettaglioComponent } from './components/dettaglio/dettaglio.component';
import { ChartGiornalieroComponent } from './components/chart-giornaliero/chart-giornaliero.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatoreComponent,
    ChartNazionaleComponent,
    DettaglioComponent,
    ChartGiornalieroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
