import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'rbi-echarts-bar-large',
  templateUrl: './echarts-bar-large.component.html',
  styleUrls: ['./echarts-bar-large.component.less']
})
export class EnchantsBarLargeComponent implements OnInit, OnChanges {
  @Input()avgLoadRatio: any;
  public large: any;
  public Time = []; // 载荷率时间数组值
  public Ratio = []; // 载荷率数组值
  constructor() {
  }
  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // 拿到载荷率X、Y轴的值
    // this.Ratio = this.avgLoadRatio.map(el => el.ratio);
    // this.Time = this.avgLoadRatio.time;
    this.large = {
      textStyle: {
        color: '#fff'
      },
      title: {
        textStyle: {
          color: '#fff'
        },
        text: '区域实时管道水流量载荷率'
      },
      tooltip : {
        trigger: 'axis'
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis : [
        {
          type : 'category',
          boundaryGap : false,
          data : this.Time
        }
      ],
      yAxis : [
        {
          type : 'value'
        }
      ],
      series : [
        {
          type: 'line',
          stack: '总量',
          areaStyle: {normal: {}},
          data: [120, 132, 101, 134, 90, 230, 210]
        }
      ]
    };
  }
}
