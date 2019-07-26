import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rbi-echarts-bar-repair',
  templateUrl: './echarts-bar-repair.component.html',
  styleUrls: ['./echarts-bar-repair.component.less']
})
export class EchartsBarRepairComponent implements OnInit {

  constructor() { }
  repair = {
    textStyle: {
      color: '#fff'
    },
    title: {
      text: '管线维修统计',
      textStyle: {
        color: '#fff'
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      }
    },
    toolbox: {
      feature: {
        dataView: {show: true, readOnly: false},
        magicType: {show: true, type: ['line', 'bar']},
        restore: {show: true},
        saveAsImage: {show: true}
      }
    },
    legend: {
      data: ['异常数', '维修次数'],
      textStyle: {
        color: '#fff'
      },
    },
    xAxis: [
      {
        type: 'category',
        data: ['1号管线', '2号管线', '3号管线', '4号管线', '5号管线', '6号管线', '7号管线', '8号管线', '9号管线', '10号管线', '11号管线', '12号管线'],
        axisPointer: {
          type: 'shadow'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '异常',
        min: 0,
        max: 250,
        interval: 50,
        axisLabel: {
          formatter: '{value} '
        }
      },
      {
        type: 'value',
        name: '维修数',
        min: 0,
        max: 25,
        interval: 5,
        axisLabel: {
          formatter: '{value} '
        }
      }
    ],
    series: [
      {
        name: '异常数',
        type: 'bar',
        data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
      },

      {
        name: '维修次数',
        type: 'line',
        yAxisIndex: 1,
        data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
      }
    ]
  };
  ngOnInit() {
  }

}
