import { Component, OnInit } from '@angular/core';
import { Provincia } from 'src/app/models/provincia.interface';
import { Nazione } from './models/nazione.interface';
import { Regione } from './models/regione.interface';
import { NazionaleService } from './service/nazionale/nazionale.service';
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
  listaTotaliReg: Regione[];
  listaTotaliPro: Provincia[];

  constructor(public nazionaleService: NazionaleService,
              private provinceService: ProvinciaService,
              private regionaleService: RegionaleService) {}

  ngOnInit(): void {
    this.nazionaleService.getUltimoNazionale().subscribe(
        naz => this.nazione = naz
    );
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
