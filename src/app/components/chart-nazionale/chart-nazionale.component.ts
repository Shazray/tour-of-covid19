import { Component, OnInit, Input } from '@angular/core';
import { Nazione } from '../../models/nazione.interface';
import { NazionaleService } from '../../service/nazionale/nazionale.service';
import { Serie } from 'src/app/models/serie.interface';
import { DataChart } from 'src/app/models/dataChart.interface';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-chart-nazionale',
  templateUrl: './chart-nazionale.component.html',
  styleUrls: ['./chart-nazionale.component.scss']
})
export class ChartNazionaleComponent implements OnInit {

  nazioni: Nazione[] = [];
  serieAttualmentePositivi: Serie[] = [];
  dataChart: DataChart[] = [];
  // grandezza chart
  view: any[] = [600, 350];

  // options
  legend = true;
  showLabels = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  showYAxisLabel = true;
  showXAxisLabel = true;
  timeline = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };


  constructor(private nazioniService: NazionaleService) {}

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    combineLatest(
      this.nazioniService.getSerieNazionale(),
      this.nazioniService.getSerieDimessi(),
      this.nazioniService.getSerieDeceduti()
    ).subscribe(([nazionale, dimessi, deceduti]) => {
      this.dataChart.push(nazionale, dimessi, deceduti);
    });
  }
}
