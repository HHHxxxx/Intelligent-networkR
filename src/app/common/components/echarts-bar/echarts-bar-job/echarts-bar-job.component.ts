import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rbi-echarts-bar-job',
  templateUrl: './echarts-bar-job.component.html',
  styleUrls: ['./echarts-bar-job.component.less']
})
export class EchartsBarJobComponent implements OnInit {

  constructor() { }
  job = {
    textStyle: {
      color: '#fff'
    },
    title: {
      text: '实时在岗维修人员',
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
      data: ['维修数量', '在岗人数'],
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
        data: (function () {
          let now = new Date();
          const res = [];
          let len = 10;
          while (len--) {
            res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
            // @ts-ignore
            now = new Date( now - 2000);
          }
          return res;
        })()
      },
      {
        type: 'category',
        boundaryGap: true,
        data: (function () {
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
        name: '人数',
        max: 30,
        min: 0,
        boundaryGap: [0.2, 0.2]
      },
      {
        type: 'value',
        scale: true,
        name: '维修数量',
        max: 1200,
        min: 0,
        boundaryGap: [0.2, 0.2]
      }
    ],
    series: [
      {
        name: '在岗人数',
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        color: '#009900',
        data:(function () {
          const res = [];
          let len = 10;
          while (len--) {
            res.push(Math.round(Math.random() * 1000));
          }
          return res;
        })()
      },
      {
        name: '维修数量',
        type: 'line',
        data:(function () {
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
