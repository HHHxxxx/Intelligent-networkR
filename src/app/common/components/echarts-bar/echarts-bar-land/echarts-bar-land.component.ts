import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rbi-echarts-bar-land',
  templateUrl: './echarts-bar-land.component.html',
  styleUrls: ['./echarts-bar-land.component.less']
})
export class EchartsBarLandComponent implements OnInit {
  constructor() {
  }
  land = {
    textStyle: {
      color: '#fff'
    },
    title: {
      text: '管线水流量排名',
      textStyle: {
        color: '#fff'
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      data: ['水流量排名'],
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
    xAxis: [
      {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#fff',
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'category',
        axisTick: {show: false},
        data: ['1号线（T/H）', '2号线（T/H）', '3号线（T/H）', '4号线（T/H）', '5号线（T/H）', '6号线（T/H）', '7号线（T/H）', '8号线（T/H）', '9号线（T/H）', '10号线（T/H）', '11号线（T/H）', '12号线（T/H）', '13号线（T/H）', '14号线（T/H）', '15号线（T/H）', '16号线（T/H）', '17号线（T/H）', '18号线（T/H）', '19号线（T/H）']
      }
    ],
    series: [
      {
        name: '水流量排名',
        type: 'bar',
        color: '#4793f3',
        label: {
          normal: {
            show: true,
            position: 'inside'
          }
        },
        data: [200, 170, 240, 244, 200, 220, 210, 170, 240, 244, 200, 220, 210, 170, 240, 244, 200, 220, 210]
      },

    ]
  };

  ngOnInit() {
  }
}


