import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Provincia } from 'src/app/models/provincia.interface';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  url = 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province.json';

  constructor(private http: HttpClient) { }

  getAndamentoProvince(): Observable<Provincia[]> {
    return this.http.get<Provincia[]>(this.url);
  }

  getDettaglioProvince(): Observable<Provincia[]> {
    return this.getAndamentoProvince()
              .pipe(
                map((results: Provincia[]) => {
                  const dettaglioProvince: Array<Provincia> = [];
                  results.forEach((result) => {
                    const provFound = dettaglioProvince.find((pro: Provincia) => pro.codice_provincia === result.codice_provincia);
                    const provinciaDettaglioIndex = dettaglioProvince.indexOf(provFound);
                    if (provFound) {
                      dettaglioProvince.splice(provinciaDettaglioIndex, 1);
                    }
                    if (result.totale_casi > 0  && !'In fase di definizione/aggiornamento'.includes(result.denominazione_provincia)) {
                      dettaglioProvince.push(result);
                    }
                  });
                  return dettaglioProvince.sort((a, b) => b.totale_casi - a.totale_casi);
                }),
                tap(pro => console.log(pro))
                );
  }
}
