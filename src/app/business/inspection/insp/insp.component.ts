import { Component, OnInit } from '@angular/core';
import {InspectionService} from '../../../common/services/inspection.service';
import {TBData} from '../../../common/model/main';

@Component({
  selector: 'rbi-insp',
  templateUrl: './insp.component.html',
  styleUrls: ['./insp.component.less']
})
export class InspComponent implements OnInit {
  PLID = []; // 管线ID
  Equipment = []; // 管线ID
  Insp = []; // 管线ID
  public pipeCircuitId: any;
  public tableContet: any;
  public tbData: TBData = new TBData();
  constructor(
    private inspectionService: InspectionService
  ) { }

  ngOnInit() {
    this.getdata();
    this.getPGdata();
    this.tbData.currentPage = 1;
    this.tbData.pageSize = 10;
    this.tbData.pipeCircuitId = '7081-1';
    this.inspectionService.gettaskDate(this.tbData).subscribe(
      value => {
        console.log('巡检记录分页数据请求成功', value);
        // if()
        this.tableContet = value.data.datas;
      }
    );
    window.document.getElementById('');
  }
  public getdata(): void {
    this.inspectionService.getAllDate().subscribe((data) => {
      console.log('巡检记录页面数据请求成功', data);
      this.PLID = data.data.pipeCircuitIds;
      this.Equipment = data.data.abAndNormalInfos; // 管线设备数据获取
      this.Insp = data.data.patrolCountInfos; // 巡检次数统计
    });
  }
  public getPGdata() {

}
}

