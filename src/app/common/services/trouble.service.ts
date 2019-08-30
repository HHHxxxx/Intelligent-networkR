import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TroubleService {

  constructor(
    private http: HttpClient,
  ) { }
  // 故障处理界面请求全部数据
  public getEventListDate(): Observable<any> {
    return this.http.get('/Intelligent_pipe_network/adim/fault/data?regionId=7081');
  }
  // 故障处理分页数据请求
  public getDate(body): Observable<any> {
    return this.http.post('/Intelligent_pipe_network/adim/fault/eventList', body);
  }
  // 地图数据请求
  public getAllDate(): Observable<any> {
    return this.http.get('/Intelligent_pipe_network/adim/homepage?regionId=7081');
  }
  // 故障处理管线维修统计请求
  public getRepairdata(id): Observable<any> {
    return this.http.get('/Intelligent_pipe_network/adim/fault/maintainInfo', id);
  }
}
