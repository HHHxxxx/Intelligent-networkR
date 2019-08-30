import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PageData} from '../../../common/model/main';

@Component({
  selector: 'rbi-his-event',
  templateUrl: './his-event.component.html',
  styleUrls: ['./his-event.component.less']
})
export class HisEventComponent implements OnInit, OnChanges {
  @Input() PLId: any;
  @Input()tableContent: any;
  val1: string;
  item: string;
  items =  [];
  head = [
    {field: 'eventTargetId', header: '异常目标ID'},
    {field: 'currentTime', header: '异常时间'},
    {field: 'targetType', header: '异常类型'},
    {field: 'waterLevel', header: '水位'},
    {field: 'eventType', header: '异常类型'},
    {field: 'eventState', header: '异常状态'},
  ];
  constructor() {}
  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.PLId.forEach( v => {
      // @ts-ignore
      this.items.push({label: v + '管线', value: v});
    });
  }
}
