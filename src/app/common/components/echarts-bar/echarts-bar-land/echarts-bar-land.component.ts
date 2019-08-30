import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MainService} from '../../../services/main.service';

@Component({
  selector: 'rbi-echarts-bar-land',
  templateUrl: './echarts-bar-land.component.html',
  styleUrls: ['./echarts-bar-land.component.less']
})
export class EchartsBarLandComponent implements OnInit, OnChanges {
  @Input()PipeWF: any;
  public PLID = [];
  public FL = [];
  public land: any;
  constructor(private mainService: MainService) {
  }
  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.PLID = this.PipeWF.map(el => el.pipecircuitid);
    this.FL = this.PipeWF.map(el => el.flow);
    this.land = {
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
            data: this.PLID
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
            data: this.FL
          },

        ]
      };
    }
}

