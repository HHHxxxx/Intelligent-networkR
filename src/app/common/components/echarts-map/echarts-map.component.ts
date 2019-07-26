import {Component, OnInit} from '@angular/core';
import {MainService} from '../../services/main.service';
declare let BMap: any;
declare let BMAP_NORMAL_MAP: any;
declare let BMAP_HYBRID_MAP: any;
declare let BMap_ANCHOR_TOP_LEFT: any;

@Component({
  selector: 'rbi-echarts-map',
  templateUrl: './echarts-map.component.html',
  styleUrls: ['./echarts-map.component.less']
})
export class EchartsMapComponent implements OnInit {
  // 省市联动
  public selectDate = '贵州省';
  public flag: string;
  public provinceDate: string;
  public citeDate: string;
  public townsDate: string;
  public province: any;
  public city: any;
  public towns: any;
  public provinceShow = false;
  public cityShow = false;
  public townsShow = false;
  constructor(private mainService: MainService) { }
  ngOnInit() {
    const map = new BMap.Map('myMap'); // 创建地图实例
    const point = new BMap.Point(106.656286, 26.681845); // 创建点坐标
    map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
    map.addControl(new BMap.MapTypeControl({
      mapTypes: [
        BMAP_NORMAL_MAP,
        BMAP_HYBRID_MAP
      ]})); // 添加地图类型控件
  }
  // 中国地图省市联动
  public administrativeClick() {
    this.provinceShow = true;
    this.province = this.mainService.province;
  }
  public provinceMouseEnter(item) {
    this.townsShow = false;
    if (item === '贵州省') {
      this.cityShow = true;
      this.provinceDate = item;
      this.city = this.mainService.city.children;
    } else {
      this.city = ['对不起，' + item + '暂未开通'];
    }
  }
  public provinceDataClick(item) {
    this.provinceShow = false;
    this.cityShow = false;
    this.townsShow = false;
    if (item === '贵州省') {
      this.selectDate = item;
    } else {
      window.confirm(item + '暂未开通');
    }
  }
  public cityMouseEnter(item) {
    if (item === '贵阳市') {
      this.townsShow = true;
      this.citeDate = item;
      this.towns = this.mainService.towns.children;
    } else {
      this.towns = ['对不起，' + item + '暂未开通'];
    }
  }
  public cityDataClick(item) {
    this.provinceShow = false;
    this.cityShow = false;
    this.townsShow = false;
    if (item === '贵阳市') {
      this.selectDate = this.provinceDate + this.citeDate;
    } else {
      window.confirm(item + '暂未开通');
    }
  }
  public townsDataClick(item) {
    this.provinceShow = false;
    this.cityShow = false;
    this.townsShow = false;
    this.selectDate = this.provinceDate + this.citeDate + item;
  }
}
