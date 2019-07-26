import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rbi-echarts-bar-portline',
  templateUrl: './echarts-bar-portline.component.html',
  styleUrls: ['./echarts-bar-portline.component.less']
})
export class EchartsBarPortlineComponent implements OnInit {

  constructor() { }
  portline = {
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
        data: ['1号管线', '2号管线', '3号管线', '4号管线', '5号管线', '6号管线', '7号管线', '8号管线', '9号管线', '10号管线', '11号管线', '12号管线', '13号管线', '14号管线', '15号管线', '16号管线', '17号管线', '18号管线', '19号管线']
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '设备数',
        min: 0,
        max: 1000,
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
        max: 1000,
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
        max: 25,
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
        data: [8.9, 7.5, 10, 10.5, 20.5, 10.2, 17.3, 16.4, 23.0, 16.5, 12.0, 10.5, 16.4, 23.0, 16.5, 12.0, 10.5, 15.5, 8.5]
      },
      {
        name: '管线设备数',
        type: 'bar',
        data: [50, 90, 80, 30, 100, 200, 150, 162, 132, 300, 500, 600, 200, 150, 162, 132, 300, 500, 600]
      },
      {
        name: '管线井数',
        type: 'bar',
        yAxisIndex: 1,
        data: [200, 300, 200, 260, 300, 360, 450, 360, 250, 300, 400, 200, 360, 450, 360, 250, 300, 400, 200]
      }

    ]
  };
  ngOnInit() {
  }

}
