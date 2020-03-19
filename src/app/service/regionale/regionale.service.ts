import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Regione } from '../../models/regione.interface';
import { Observable } from 'rxjs';
import { distinct, tap, map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RegionaleService {
  url = 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json';

  // regioni: Array<Regione> = [];

  constructor(private http: HttpClient,
              public date: DatePipe) { }

  getAndamentoRegionale(): Observable<Regione[]> {
    return this.http.get<Regione[]>(this.url);
  }

  getDettaglioRegioni(): Observable<Regione[]> {
    return this.getAndamentoRegionale()
              .pipe(
                map((results: Regione[]) => {
                  const dettaglioRegioni: Array<Regione> = [];
                  results.forEach((result) => {
                    const regioneDettaglioFound = dettaglioRegioni.find((reg: Regione) => reg.codice_regione === result.codice_regione);
                    const regioneDettaglioIndex = dettaglioRegioni.indexOf(regioneDettaglioFound);
                    if (regioneDettaglioFound) {
                      dettaglioRegioni.splice(regioneDettaglioIndex, 1);
                    }
                    if (result.totale_casi > 0) {
                      dettaglioRegioni.push(result);
                    }
                  });
                  return dettaglioRegioni.sort((a, b) => b.totale_casi - a.totale_casi);
                }),
                tap(reg => console.log(reg))
                );
  }

}
