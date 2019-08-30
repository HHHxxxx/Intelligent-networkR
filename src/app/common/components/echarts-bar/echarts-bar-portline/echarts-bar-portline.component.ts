import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'rbi-echarts-bar-portline',
  templateUrl: './echarts-bar-portline.component.html',
  styleUrls: ['./echarts-bar-portline.component.less']
})
export class EchartsBarPortlineComponent implements OnInit, OnChanges {
  @Input()PLCI: any;
  public portline: any;
  public pipecircuitid = []; // 管线ID
  public pipeLength = []; // 管线长度
  public sensorTotal = []; // 管线长度
  public manholeTotal = []; // 管线长度
  constructor() { }
  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.pipecircuitid = this.PLCI.map(el => el.pipeCircuitId);
    this.pipeLength = this.PLCI.map(el => el.pipeLength / 10000);
    this.sensorTotal = this.PLCI.map(el => el.sensorTotal);
    this.manholeTotal = this.PLCI.map(el => el.manholeTotal);
    this.portline = {
      textStyle: {
        color: '#fff'
      },
      title: {
        text: '管线概述',
        textStyle: {
          color: '#fff'
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        right: '20%'
      },
      toolbox: {
        feature: {
          dataView: {show: true, readOnly: false},
          restore: {show: true},
          saveAsImage: {show: true}
        }
      },
      legend: {
        data: ['管线总长度', '管线井数', '管线设备数'],
        textStyle: {
          color: '#fff'
        }
      },
      xAxis: [
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          // tslint:disable-next-line:max-line-length
          data: this.pipecircuitid
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '设备数',
          min: 0,
          max: 300,
          position: 'right',
          axisLine: {
            lineStyle: {
              color: '#4793f3'
            }
          },
          axisLabel: {
            formatter: '{value} 个'
          }
        },
        {
          type: 'value',
          name: '井数',
          min: 0,
          max: 300,
          position: 'right',
          offset: 60,
          axisLine: {
            lineStyle: {
              color: '#00CC99'
            }
          },
          axisLabel: {
            formatter: '{value} 个'
          }
        },
        {
          type: 'value',
          name: '长度',
          min: 0,
          max: 30,
          position: 'left',
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          },
          axisLabel: {
            formatter: '{value} km'
          }
        }
      ],
      series: [
        {
          name: '管线总长度',
          type: 'line',
          yAxisIndex: 2,
          data: this.pipeLength
        },
        {
          name: '管线设备数',
          type: 'bar',
          data: this.sensorTotal
        },
        {
          name: '管线井数',
          type: 'bar',
          yAxisIndex: 1,
          data: this.manholeTotal
        }
      ]
    };
  }
}
