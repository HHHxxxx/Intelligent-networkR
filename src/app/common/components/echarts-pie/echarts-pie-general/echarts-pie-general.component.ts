import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'rbi-echarts-pie-general',
  templateUrl: './echarts-pie-general.component.html',
  styleUrls: ['./echarts-pie-general.component.less']
})
export class EchartsPieGeneralComponent implements OnInit, OnChanges {
  @Input()abnormal: any;
  // public general: any;
  public abnormalName = []; // 异常名称
  public abnormalCount = []; // 异常次数
  public abnormalPercent = []; // 异常比例
  constructor() { }
  general = {
    title : {
      text: '异常百分比',
      x: 'center',
      textStyle: {
        color: '#fff'
      },
    },
    tooltip : {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['井盖丢失', '井盖损坏', '井盖异响', '淤积', '沉陷', '水溢出'],
      textStyle: {
        color: '#fff'
      },
    },
    series : [
      {
        name: '访问来源',
        type: 'pie',
        radius : '55%',
        center: ['50%', '60%'],
        data: [
          {value: 335, name: '井盖丢失'},
          {value: 310, name: '井盖损坏'},
          {value: 234, name: '井盖异响'},
          {value: 135, name: '淤积'},
          {value: 1548, name: '沉陷'},
          {value: 158, name: '水溢出'}
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
  }

}
