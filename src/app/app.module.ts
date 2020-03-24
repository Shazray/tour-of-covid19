import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartGiornalieroComponent } from './components/chart-giornaliero/chart-giornaliero.component';
import { ChartNazionaleComponent } from './components/chart-nazionale/chart-nazionale.component';
import { ContatoreComponent } from './components/contatore/contatore.component';
import { DettaglioComponent } from './components/dettaglio/dettaglio.component';
import { NazioneEffects } from './redux/covid.effects';
import { covidReducer } from './redux/covid.reducer';
import { CounterBackgroundColorDirective } from './directives/counter-background-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContatoreComponent,
    ChartNazionaleComponent,
    DettaglioComponent,
    ChartGiornalieroComponent,
    CounterBackgroundColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({covid: covidReducer}),
    EffectsModule.forRoot([NazioneEffects])
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
