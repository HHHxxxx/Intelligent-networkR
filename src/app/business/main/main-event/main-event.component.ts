import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ExceptionList} from '../../../common/model/main';

@Component({
  selector: 'rbi-main-event',
  templateUrl: './main-event.component.html',
  styleUrls: ['./main-event.component.less']
})
export class MainEventComponent implements OnInit, OnChanges {
  @Input() exceptionList: any;
  head = [
    {field: 'time', header: '时间'},
    {field: 'type', header: '类型'},
    {field: 'position', header: '坐标'},
    {field: 'description', header: '事件描述'},
  ];
  constructor() {
  }
  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
  }
}
