import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";

@Injectable({
  providedIn: 'root'
})
export class InspectionService {

  constructor(
    private http: HttpClient,
  ) { }
  // 巡检页面数据请求
  public getAllDate(): Observable<any> {
    return this.http.get('/Intelligent_pipe_network/adim/patrol/data?regionId=7081');
  }
  // 巡检进度数据请求
  public gettaskDate(body): Observable<any> {
    return this.http.post('/Intelligent_pipe_network/adim/patrol/tasking', body);
  }
}
