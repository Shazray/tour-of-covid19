import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Provincia } from 'src/app/models/provincia.interface';
import { Nazione } from './models/nazione.interface';
import { Regione } from './models/regione.interface';
import { doRefresh } from './redux/covid.action';
import { selectLastNazione } from './redux/index';
import { ProvinciaService } from './service/provincia/provincia.service';
import { RegionaleService } from './service/regionale/regionale.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  showCounters = false;
  title = 'tour-of-covid19';
  totalePositivi = 0;
  tabName = 'Regioni';

  nazione: Nazione;
  nazione$: Observable<Nazione> = this.store.pipe(select(selectLastNazione));
  /* nazione$: Observable<Nazione> = this.store.select(state => state.covid); */
  listaTotaliReg: Regione[];
  listaTotaliPro: Provincia[];

  //@ViewChild(ContatoreComponent) contatoreComponent;

  constructor(// public nazionaleService: NazionaleService,
              private provinceService: ProvinciaService,
              private regionaleService: RegionaleService,
              private store: Store<any>) {}

  ngOnInit(): void {

    this.store.dispatch(doRefresh());

    this.nazione$.pipe(filter((naz) => !!naz)).subscribe((naz: any) => {
      console.log('AppState: ' + JSON.stringify(naz));
      this.nazione = naz;
    });

    this.regionaleService.getDettaglioRegioni().subscribe(
      (regioni: Regione[]) => this.listaTotaliReg = regioni
    );
    this.provinceService.getDettaglioProvince().subscribe(
      (province: Provincia[]) => this.listaTotaliPro = province
    );
  }

  switchTab(tabName: string): void {
    this.tabName = tabName;
  }

}
