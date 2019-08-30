import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'rbi-echarts-bar-insp',
  templateUrl: './echarts-bar-insp.component.html',
  styleUrls: ['./echarts-bar-insp.component.less']
})
export class EchartsBarInspComponent implements OnInit, OnChanges {
  @Input()Insp: any;
  public PLID = [];
  public PatrolCount = [];
  public insp: any;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.PLID = this.Insp.map(el => el.pipeCircuitId);
    this.PatrolCount = this.Insp.map(el => el.patrolCount);
    this.insp = {
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
          data: this.PLID,
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
          max: 10,
          interval: 2,
          axisLabel: {
            formatter: '{value} '
          }
        }
      ],
      series: [
        {
          name: '巡检次数',
          type: 'bar',
          data: this.PatrolCount
        }
      ]
    };
  }

}
