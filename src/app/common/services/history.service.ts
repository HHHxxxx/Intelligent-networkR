import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(
    private http: HttpClient
  ) {}
  // 管线ID获取
  public getCircuitIdData(): Observable<any> {
    return this.http.get('/Intelligent_pipe_network/adim/pipeCircuit/circuitId?regionId=7081');
  }
  // 管线状态分页数据请求
  public getAllDate(body): Observable<any> {
    return this.http.post('/Intelligent_pipe_network/adim/pipeCircuit/event', body);
  }
}
