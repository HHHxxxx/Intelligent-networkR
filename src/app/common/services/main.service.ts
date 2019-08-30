import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable()
export class MainService {
  public province = [
    '贵州省',
    '云南省',
    '四川省',
  ];
  public city = {
    name: '贵州省',
    children: [
      '贵阳市', '六盘水', '安顺市'
    ]
  };
  public towns = {
    name: '贵阳市',
    children: [
      '南明区', '云岩区', '白云区'
    ]
  };
  // 井异常状态码枚举
  public manholeState = {
    decade: ['井盖状态：正常', '井盖状态：井盖移位', '井盖状态：传感器损坏 '], // 井盖
    individual: ['井水位：低于30%', '井水位：大于0.3，低于0.6', '井水位：大于0.6，低于0.8%', // 井的水位
      '井水位：大于0.8，低于等于1', '井水位：等于0'
    ]
  };
  // 管道异常状态码枚举
  public pipeState = {
    decade: ['水位：正常(水位低于30%)', '水位：大于0.3，低于0.6', '水位：大于0.6，低于0.8%',
      '水位：大于0.8，低于等于1%', '水位：等于0'
    ],
    individual: ['管道状态：正常', '管道状态：堵塞', '管道状态：渗透过高', '管道状态：传感器异常']
  };
  // 维修状态码枚举
  public repairState = ['未处理', '指派中', '处理中', '处理完成'];
  // 井盖颜色
  public colorList  = [];
  constructor(
    private http: HttpClient,
  ) {}
  // 首页数据请求
  public getAllDate(): Observable<any> {
    return this.http.get('/Intelligent_pipe_network/adim/homepage?regionId=7081');
  }
}

