import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'rbi-insp-statistics',
  templateUrl: './insp-statistics.component.html',
  styleUrls: ['./insp-statistics.component.less']
})
export class InspStatisticsComponent implements OnInit {
  @Input()Insp: any;
  constructor() { }

  ngOnInit() {
  }

}
