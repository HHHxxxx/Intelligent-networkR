import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'rbi-echarts-bar-equipment',
  templateUrl: './echarts-bar-equipment.component.html',
  styleUrls: ['./echarts-bar-equipment.component.less']
})
export class EchartsBarEquipmentComponent implements OnInit, OnChanges {
  @Input()Equipment: any;
  public PLID = [];
  public Abnormal = [];
  public Normal = [];
  public equipment: any;
  constructor() { }
  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.PLID = this.Equipment.map(el => el.pipeCircuitId);
    this.Abnormal = this.Equipment.map(el => el.abnormal);
    this.Normal = this.Equipment.map(el => el.normal);
    this.equipment = {
      textStyle: {
        color: '#fff'
      },
      title: {
        text: '管线设备巡检统计',
        textStyle: {
          color: '#fff'
        },
      },
      tooltip : {
        trigger: 'axis',
        axisPointer : {
          type : 'shadow'
        }
      },
      legend: {
        data: ['故障设备', '正常设备'],
        textStyle: {
          color: '#fff'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis:  {
        type: 'value',
        min: 0,
        max: 500,
      },
      yAxis: {
        type: 'category',
        data: this.PLID
      },
      series: [
        {
          name: '故障设备',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          data: this.Abnormal
        },
        {
          name: '正常设备',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          data: this.Normal
        },
      ]
    };
  }

}
