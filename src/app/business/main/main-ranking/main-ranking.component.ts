import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'rbi-main-ranking',
  templateUrl: './main-ranking.component.html',
  styleUrls: ['./main-ranking.component.less']
})
export class MainRankingComponent implements OnInit {
  @Input()PipeWF: any;
  constructor() { }

  ngOnInit() {
  }

}
