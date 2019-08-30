import { Component, OnInit } from '@angular/core';
import {MainService} from '../../../common/services/main.service';

@Component({
  selector: 'rbi-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  public exceptionList = []; // 异常事件列表
  public abnormal = []; // 异常比例数组
  public pie = []; // 异常百分比数组
  public homepageWell: any;  // 所有的井
  public wellPointData = []; // 井的GPS数组
  public homepagePipe: any;  // 所有的管道
  public PLCI = []; // 管线概述数组
  public PipeWF = [];  // 管线水流量数组
  public avgLoadRatio = [];  // 管线水流量数组
  constructor(
    private mainService: MainService
  ) { }

  ngOnInit() {
    this.getData();
    // 全屏点击事件
    window.document.getElementById('');
  }
  public getData(): void {
    const that = this;
    this.mainService.getAllDate().subscribe(
      (data) => {
        console.log('请求成功', data);
        this.homepageWell = data.data.manholeAndPipeInfo.manholeInfos; // 获取井信息数据
        this.homepagePipe = data.data.manholeAndPipeInfo.pipeInfos; // 获取管道信息数据
        this.exceptionList = data.data.abnormalEventList; // 获取异常事件列表数据
        this.PipeWF = data.data.pipelinewaterflowList; // 获取管道水流量数据
        this.PLCI = data.data.pipeCircuitInfos; // 获取概述数据
        this.avgLoadRatio = data.data.avgLoadRatio; // 获取载荷率数据
        this.abnormal = data.data.abnormalPercent; // 获取异常比例数据
        console.log('载荷率数据', this.avgLoadRatio);
        console.log('井信息', this.homepageWell);
        console.log('管道信息', this.homepagePipe);
        console.log('异常事件列表', this.exceptionList);
        console.log('管道水流量', this.PipeWF);
        console.log('管线概述数据', this.PLCI);
        console.log('异常比例数据', this.abnormal);
      },
      error => {
        console.log('请求失败', error);
      }
    );
  }
  // 遍历出异常井的坐标点
  public addWellMarker(well: any): any {
    console.log('123456', well);
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < well.length; i++) {
      const wllState = well[i].manholeState.toString();
      if (wllState[0] !== '1' || wllState[1] !== '1') {
        const gpsId = well[i].gpsId.split(',');
        this.wellPointData.push(
          {
            name: well[i].gpsPosition,
            value: [gpsId[0], gpsId[1], wllState, well[i].manholeState],
            visualMap: false,
          }
        );
      }
    }
    return  this.wellPointData;
  }
}

