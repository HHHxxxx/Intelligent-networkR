import { Component, OnInit } from '@angular/core';
import {HistoryService} from '../../../common/services/history.service';
import {HisData} from '../../../common/model/main';

@Component({
  selector: 'rbi-his',
  templateUrl: './his.component.html',
  styleUrls: ['./his.component.less']
})
export class HisComponent implements OnInit {
  public PLId = []; // 管线id
  public hisData: HisData = new HisData();
  public tableContet: any;
  constructor(
    private historyservice: HistoryService
  ) { }

  ngOnInit() {
    this.getPlIdData();
    // 管线管线状态分页数据参数
    this.hisData.pipeCircuitId = '7081-0';
    this.hisData.timeMarking = 1;
    this.hisData.currentPage = 2;
    this.hisData.pageSize = 6;
    this.historyservice.getAllDate(this.hisData).subscribe(
      value => {
        console.log('管线状态分页数据请求成功', value);
        this.tableContet = value.data.datas;
      }
    );
  }
  // 管线状态页面数据获取
  public getPlIdData(): void {
    this.historyservice.getCircuitIdData().subscribe((data) => {
      console.log('管线状态页面管线id请求成功', data);
      this.PLId = data.pipeCircuitIds;
    });
  }
}
