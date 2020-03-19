import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { DataChart } from 'src/app/models/dataChart.interface';
import { Nazione } from '../../models/nazione.interface';
import { Serie } from '../../models/serie.interface';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class NazionaleService {

  url = 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json';


  constructor(private http: HttpClient,
              public datepipe: DatePipe) { }

  getAndamentoNazione(): Observable<Nazione[]> {
    return this.http.get<Nazione[]>(this.url);
  }

  getUltimoNazionale(): Observable<Nazione> {
    return this.getAndamentoNazione()
              .pipe(
                  take(1),
                  map(naz => naz[naz.length - 1]),
                  tap(naz => console.log('ultimo nazione: ' + naz))
              );
  }

  getSerieNazionale(): Observable<DataChart> {
    return this.getAndamentoNazione()
                .pipe(
                    take(1),
                    map(naz => {
                          const serieAttualmentePositivi: Serie[] = [];
                          naz.forEach(elem => {
                            const puntoSerie: Serie = {
                              name: this.datepipe.transform(elem.data, 'dd/MM'),
                              value: elem.totale_attualmente_positivi
                            };
                            serieAttualmentePositivi.push(puntoSerie);
                          });
                          const dataChart: DataChart = {
                            name: 'Attualmente Positivi',
                            series: serieAttualmentePositivi
                          };
                          return dataChart;
    }));
  }

  getSerieDimessi(): Observable<DataChart> {
    return this.getAndamentoNazione()
                .pipe(
                    take(1),
                    map(naz => {
                          const serieAttualmentePositivi: Serie[] = [];
                          // const dataChart: DataChart[] = [];
                          naz.forEach(elem => {
                            const puntoSerie: Serie = {
                              name: this.datepipe.transform(elem.data, 'dd/MM'),
                              value: elem.dimessi_guariti
                            };
                            serieAttualmentePositivi.push(puntoSerie);
                          });
                          const dataChart: DataChart = {
                            name: 'Dimessi',
                            series: serieAttualmentePositivi
                          };
                          return dataChart;
    }));
  }

  getSerieDeceduti(): Observable<DataChart> {
    return this.getAndamentoNazione()
                .pipe(
                    take(1),
                    map(naz => {
                          const serieAttualmentePositivi: Serie[] = [];
                          naz.forEach(elem => {
                            const puntoSerie: Serie = {
                              name: this.datepipe.transform(elem.data, 'dd/MM'),
                              value: elem.deceduti
                            };
                            serieAttualmentePositivi.push(puntoSerie);
                          });
                          const dataChart: DataChart = {
                            name: 'Deceduti',
                            series: serieAttualmentePositivi
                          };
                          return dataChart;
    }));
  }

  getSerieGiornaliera(): Observable<DataChart> {
    return this.getAndamentoNazione()
                .pipe(
                    take(1),
                    map(naz => {
                          const serieAttualmentePositivi: Serie[] = [];
                          naz.forEach(elem => {
                            const puntoSerie: Serie = {
                              name: this.datepipe.transform(elem.data, 'dd/MM'),
                              value: elem.nuovi_attualmente_positivi
                            };
                            serieAttualmentePositivi.push(puntoSerie);
                          });
                          const dataChart: DataChart = {
                            name: 'Attualmente Positivi',
                            series: serieAttualmentePositivi
                          };
                          return dataChart;
    }));
  }


}
