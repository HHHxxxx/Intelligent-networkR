import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'rbi-trouble-event',
  templateUrl: './trouble-event.component.html',
  styleUrls: ['./trouble-event.component.less']
})
export class TroubleEventComponent implements OnInit, OnChanges {
  @Input()pLId: any;
  @Input()tableContent: any;
  @Output()
  public event: EventEmitter<string> = new EventEmitter<string>();
  public pipeCircuitId: any;
  public state: any;
  prop = [
    {field: 'eventTargetId', header: '异常目标ID'},
    {field: 'currentTime', header: '异常时间'},
    {field: 'targetType', header: '异常类型'},
    {field: 'gpsPosition', header: '坐标'},
    {field: 'eventType', header: '异常状态'},
    {field: 'gpsPosition', header: '问题类型'},
    {field: '', header: '操作'},
    ];
  head = [
    {field: 'eventTargetId', header: '异常目标ID'},
    {field: 'currentTime', header: '异常时间'},
    {field: 'targetType', header: '目标类型'},
    {field: 'eventType', header: '事件类型'},
    {field: 'gpsPosition', header: '坐标'},
    {field: 'name', header: '维修人姓名'},
    {field: 'userName', header: '维修人账号'},
  ];
  public item: string; // 管线ID
  public items =  []; // 管线ID数组
  public display = false;
  constructor() {
  }
  ngOnInit() {
  }
  showDialog() {
    this.display = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.pLId.forEach( v => {
      // @ts-ignore
      this.items.push({label: v + '管线', value: v});
    });
  }
  public eventChange(): void {
    this.pipeCircuitId = this.item;
    this.state = '1';
    const plid = {plid: this.pipeCircuitId, value:  this.state};
    // @ts-ignore
    this.event.emit(plid);
  }
  public tabChange(e): void {
    console.log(e);
    this.state = e.index + 1;
    if (this.pipeCircuitId !== undefined) {
      const data = {data: this.pipeCircuitId, value:  this.state};
      // @ts-ignore
      this.event.emit(data);
    }
  }
}
