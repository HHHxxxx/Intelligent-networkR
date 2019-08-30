import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rbi-echarts-cdk-idx',
  templateUrl: './echarts-cdk-idx.component.html',
  styleUrls: ['./echarts-cdk-idx.component.less']
})
export class EchartsCdkIdxComponent implements OnInit {

  constructor(
  ) { }
  option = {
    textStyle: {
      color: '#fff'
    },
    title: {
      text: '管线事件统计',
      textStyle: {
        color: '#fff'
      },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#283b56'
        }
      }
    },
    legend: {
      data: ['管道异常', '设备异常', '井异常'],
      textStyle: {
        color: '#fff'
      },
    },
    toolbox: {
      show: true,
      feature: {
        dataView: {readOnly: false},
        restore: {},
        saveAsImage: {}
      }
    },
    dataZoom: {
      show: false,
      start: 0,
      end: 100
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: true,
        data: (function foo() {
          const now = new Date();
          const res = [];
          let len = 10;
          while (len--) {
            res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
            // @ts-ignore
            now = new Date(now - 2000);
          }
          return res;
        })()
      },
      {
        type: 'category',
        boundaryGap: true,
        data: (function foo() {
          const res = [];
          let len = 10;
          while (len--) {
            res.push(10 - len - 1);
          }
          return res;
        })()
      }
    ],
    yAxis: [
      {
        type: 'value',
        scale: true,
        name: '次数',
        max: 30,
        min: 0,
        boundaryGap: [0.2, 0.2]
      },
      {
        type: 'value',
        scale: true,
        name: '次',
        max: 1200,
        min: 0,
        boundaryGap: [0.2, 0.2]
      }
    ],
    series: [
      {
        name: '管道异常',
        type: 'line',
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: (function foo() {
          const res = [];
          let len = 10;
          while (len--) {
            res.push(Math.round(Math.random() * 1000));
          }
          return res;
        })()
      },
      {
        name: '井异常',
        type: 'line',
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: (function foo() {
          const res = [];
          let len = 10;
          while (len--) {
            res.push(Math.round(Math.random() * 1000));
          }
          return res;
        })()
      },
      {
        name: '设备异常',
        type: 'line',
        data: (function foo() {
          const res = [];
          let len = 0;
          while (len < 10) {
            // @ts-ignore
            res.push((Math.random() * 10 + 5).toFixed(1) - 0);
            len++;
          }
          return res;
        })()
      }
    ]
  };
  ngOnInit() {
  }
}
