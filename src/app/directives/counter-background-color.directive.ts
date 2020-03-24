import { Directive, HostBinding, Input } from '@angular/core';
import { StatisticType } from '../models/statistic.type';

@Directive({
  selector: '[appCounterType]'
})
export class CounterBackgroundColorDirective {

  @Input() appCounterType: StatisticType = 'deceduti';

  constructor() {
  }

  @HostBinding('attr.tabIndex') get isDeceduti(): number {
    return -1;
  }

  @HostBinding('class.attualmente-positivi') get isAttualmentePositivi(): boolean {
    return this.appCounterType === 'attualmente-positivi';
  }

  @HostBinding('class.guariti') get isGuariti(): boolean {
    return this.appCounterType === 'guariti';
  }

  @HostBinding('class.positivi') get isPositivi(): boolean {
    return this.appCounterType === 'positivi';
  }




}
