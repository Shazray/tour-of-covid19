import { Component, OnInit } from '@angular/core';
import { DataChart } from 'src/app/models/dataChart.interface';
import { Nazione } from 'src/app/models/nazione.interface';
import { Serie } from 'src/app/models/serie.interface';
import { NazionaleService } from 'src/app/service/nazionale/nazionale.service';

@Component({
  selector: 'app-chart-giornaliero',
  templateUrl: './chart-giornaliero.component.html',
  styleUrls: ['./chart-giornaliero.component.scss']
})
export class ChartGiornalieroComponent implements OnInit {

  nazioni: Nazione[] = [];
  serieAttualmentePositivi: Serie[] = [];
  dataChart: DataChart[] = [];
  // grandezza chart
  view: any[] = [600, 350];

  // options
  legend = false;
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
    this.nazioniService.getSerieGiornaliera().subscribe((data) => {
      this.dataChart.push(data);
    });
  }
}
