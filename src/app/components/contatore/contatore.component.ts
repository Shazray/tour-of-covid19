import { Component, OnInit, Input } from '@angular/core';
import { StatisticType } from '../../models/statistic.type';

@Component({
  selector: 'app-contatore',
  templateUrl: './contatore.component.html',
  styleUrls: ['./contatore.component.scss']
})
export class ContatoreComponent implements OnInit {

  @Input()
  titolo: string;

  @Input()
  valore: number;

  @Input()
  type: StatisticType;


  constructor() { }

  ngOnInit(): void {
  }

}
