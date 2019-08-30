import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'rbi-echarts-bar-repair',
  templateUrl: './echarts-bar-repair.component.html',
  styleUrls: ['./echarts-bar-repair.component.less']
})
export class EchartsBarRepairComponent implements OnInit {
  @Input()RepairData: any;
  public option: any;
  constructor() {}
  ngOnInit() {
    this.setData();
  }
  public  setOption(data): void {
    this.option = {
      textStyle: {
        color: '#fff'
      },
      title: {
        text: '管线维修统计',
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
        data: ['维修次数', '异常数'],
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
            let now = new Date();
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
            data.shift();
            data.push(Math.round(Math.random() * 12));
            return data;
          })()
        }
      ],
      yAxis: [
        {
          type: 'value',
          scale: true,
          name: '异常',
          max: 30,
          min: 0,
          boundaryGap: [0.2, 0.2]
        },
        {
          type: 'value',
          scale: true,
          name: '维修数',
          max: 1200,
          min: 0,
          boundaryGap: [0.2, 0.2]
        }
      ],
      series: [
        {
          name: '异常数',
          type: 'bar',
          xAxisIndex: 1,
          yAxisIndex: 1,
          data: (function foo() {
            data.shift();
            data.push(Math.round(Math.random() * 12));
            return data;
          })()
        },
        {
          name: '维修次数',
          type: 'line',
          data: (function foo() {
            data.shift();
            data.push(Math.round(Math.random() * 12));
            return data;
          })()
        }
      ]
    };
  }
  public setData(): void {
    const res = [];
    let len = 10;
    while (len--) {
      res.push(Math.round(Math.random() * 100));
    }
    this.setOption(res);
    setInterval(() => this.setOptionData(res), 10000);
    //
  }
  public setOptionData(data): void {
    const axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '');
    const data0 = this.option.series[0].data;
    console.log(data0);
    this.option.xAxis[0].data.shift();
    this.option.xAxis[0].data.push(axisData);
    this.setOption(data);
  }

}
