import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rbi-echarts-bar-equipment',
  templateUrl: './echarts-bar-equipment.component.html',
  styleUrls: ['./echarts-bar-equipment.component.less']
})
export class EchartsBarEquipmentComponent implements OnInit {

  constructor() { }
  equipment = {
    textStyle: {
      color: '#fff'
    },
    title: {
      text: '实时智能设备监测',
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
    legend: {
      data: ['异常', '正常'],
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
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
    },
    yAxis: {
      type: 'category',
      data: ['1号管线','2号管线','3号管线','4号管线','5号管线','6号管线','7号管线','8号管线','9号管线','10号管线','11号管线','12号管线','13号管线','14号管线','15号管线','16号管线']
    },
    series: [
      {
        name: '异常',
        type: 'bar',
        data: []
      },
      {
        name: '正常',
        type: 'bar',
        data: [50, 60, 150, 200, 55, 90, 85, 100, 155, 250, 155, 160, 265, 170, 275, 180]
      }
    ]
  };
  ngOnInit() {
  }

}
