import { Component, OnInit, Input } from '@angular/core';
import { Regione } from 'src/app/models/regione.interface';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.scss']
})
export class DettaglioComponent implements OnInit {

  @Input()
  title: string;
  @Input()
  value: Regione[];

  constructor() { }

  ngOnInit(): void {

  }

}
