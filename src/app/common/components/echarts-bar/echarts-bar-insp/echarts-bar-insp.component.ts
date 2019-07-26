import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rbi-echarts-bar-insp',
  templateUrl: './echarts-bar-insp.component.html',
  styleUrls: ['./echarts-bar-insp.component.less']
})
export class EchartsBarInspComponent implements OnInit {

  constructor() { }
  insp = {
    textStyle: {
      color: '#fff'
    },
    title: {
      text: '管线巡检统计',
      textStyle: {
        color: '#fff'
      },
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
      data: ['巡检次数'],
      textStyle: {
        color: '#fff'
      },
    },
    xAxis: [
      {
        type: 'category',
        data: ['1号管线', '2号管线', '3号管线','4号管线','5号管线','6号管线','7号管线','8号管线','9号管线','10号管线','11号管线','12号管线','13号管线','14号管线','15号管线','16号管线','17号管线'],
        axisPointer: {
          type: 'shadow'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '次数',
        min: 0,
        max: 250,
        interval: 50,
        axisLabel: {
          formatter: '{value} '
        }
      }
    ],
    series: [
      {
        name: '巡检次数',
        type: 'bar',
        data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
      }
    ]
  };
  ngOnInit() {
  }

}
