import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
