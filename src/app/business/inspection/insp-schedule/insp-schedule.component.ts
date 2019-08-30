import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PageData} from '../../../common/model/main';
import {InspectionService} from '../../../common/services/inspection.service';

@Component({
  selector: 'rbi-insp-schedule',
  templateUrl: './insp-schedule.component.html',
  styleUrls: ['./insp-schedule.component.less']
})
export class InspScheduleComponent implements OnInit, OnChanges {
  @Input()PLID: any;
  @Input()tableContent: any;
  item: string;
  region: string;
  display = false;
  regions = [
    {label: '白云区云城尚品w1', value: '白云区云城尚品w1'},
    {label: '白云区云城尚品w2', value: '白云区云城尚品w2'},
    {label: '白云区云城尚品w3', value: '白云区云城尚品w3'},
  ];
  items =  [];
  head = [
    {field: 'regionId', header: '巡检地区ID'},
    {field: 'pipeCircuitId', header: '巡检管线ID'},
    {field: 'startPipeId', header: '巡检起始点ID'},
    {field: 'endPipeId', header: '巡检结束点ID'},
    {field: 'receivingTime', header: '任务接收时间'},
    {field: 'completeTime', header: '任务完成时间'},
  ];
  constructor(
  ) { }

  ngOnInit() {
  }
  showDialog() {
    this.display = true;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.PLID.forEach( v => {
      // @ts-ignore
      this.items.push({label: v + '管线', value: v});
    });
  }
}
