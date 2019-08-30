import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'rbi-trouble-statistics',
  templateUrl: './trouble-statistics.component.html',
  styleUrls: ['./trouble-statistics.component.less']
})
export class TroubleStatisticsComponent implements OnInit {
  @Input()RepairData: any;
  constructor() { }

  ngOnInit() {
  }

}
