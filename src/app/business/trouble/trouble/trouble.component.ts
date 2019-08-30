import {Component, Input, OnInit} from '@angular/core';
import {TroubleService} from '../../../common/services/trouble.service';
import {PageData, RepairData} from '../../../common/model/main';
import {MainService} from '../../../common/services/main.service';

@Component({
  selector: 'rbi-trouble',
  templateUrl: './trouble.component.html',
  styleUrls: ['./trouble.component.less']
})
export class TroubleComponent implements OnInit {
  public pLId = []; // 管线id
  public tableContet: any;
  public Pipettes: any;
  public pageData: PageData = new PageData();
  public repairData: RepairData = new RepairData();
  public RepairData = [];
  constructor(
    private troubleService: TroubleService,
    private mainService: MainService
  ) { }

  ngOnInit() {
    this.getData();
    this.getGPSData();
    this.pageData.currentPage = 1;
    this.pageData.pageSize = 6;
    this.pageData.pipeCircuitId = '7081-1';
    this.pageData.state = 1;
    this.troubleService.getDate(this.pageData).subscribe(
      value => {
        console.log('故障处理分页数据请求成功', value);
        // if()
        this.tableContet = value.data.datas;
      }
    );
    // 全屏点击事件
    window.document.getElementById('');
  }
  // 故障处理全部数据获取
  public getData(): void {
    this.troubleService.getEventListDate().subscribe((data) => {
      console.log('故障处理全部数据请求成功', data);
      this.pLId = data.data.pipeCircuitId;
    });
  }
  // 故障处理分页数据获取
  public getPipeDta(e): void {
    this.pageData.pipeCircuitId = e.data;
    this.pageData.state = e.value;
    this.troubleService.getDate(this.pageData).subscribe(
      value => {
        console.log('故障处理分页数据请求成功01', value);
        // if()
        this.tableContet = value.data.datas;
      }
    );
    // 维修统计数据请求
    this.repairData.circuitId = e.data;
    this.troubleService.getRepairdata(this.repairData).subscribe(
      value => {
        console.log('维修数据请求成功', value);
        this.RepairData = value;
      }
    );
  }
  // 管道信息
  public getGPSData(): void {
    const that = this;
    this.mainService.getAllDate().subscribe(
      (data) => {
        console.log('请求成功', data);
        this.Pipettes = data.data.manholeAndPipeInfo.pipeInfos;
        console.log('管道信息', this.Pipettes);
      },
      error => {
        console.log('请求失败', error);
      }
    );
  }
  // // 维修统计数据请求
  // public getrpData(e): void {
  //   this.repairData.circuitId = e.data;
  //   this.troubleService.getRepairdata(this.repairData).subscribe(
  //     value => {
  //       console.log('维修数据请求成功', value);
  //       // // if()
  //       // this.tableContet = value.data.datas;
  //     }
  //   );
  // }
}
