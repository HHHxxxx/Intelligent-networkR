import {Component, OnInit, Input, SimpleChanges, OnChanges} from '@angular/core';
import {MainService} from '../../services/main.service';
import {HttpClient} from '@angular/common/http';
import {SessionService} from '../../services/session.service';
declare let BMap: any;
declare let BMAP_ANCHOR_TOP_LEFT: any;
declare let BMAP_NORMAL_MAP: any;
declare let BMAP_HYBRID_MAP: any;

@Component({
  selector: 'rbi-echarts-map',
  templateUrl: './echarts-map.component.html',
  styleUrls: ['./echarts-map.component.less']
})
export class EchartsMapComponent implements OnInit, OnChanges {
  @Input() wallas: any;
  @Input() Pipettes: any;
  // 省市联动
  public Regions = [];
  public selectDate = '贵州省';
  public provinceDate: string;
  public citeDate: string;
  public townsDate: string;
  public province: any;
  public city: any;
  public towns: any;
  public provinceShow = false;
  public cityShow = false;
  public townsShow = false;
  // 井坐标画点
  Welldata = [
    {
      long: 106.656286,
      lat: 26.909652,
      address: '天安门广场'
    },
  ];
  // 管道坐标画线
  PipeData = []; // 管道数据
  region = []; // 地区数据
  myChart;
  map;

  constructor(
    public http: HttpClient,
    private session: SessionService,
    private mainService: MainService,
  ) {
  }

  ngOnInit() {
    this.getRegionsdata();
    // @ts-ignore
    this.myChart = echarts.init(document.getElementById('main'));
    this.myChart.setOption(this.setOptions([106.66189, 26.686475], 18, this.setSeries(this.PipeData, [])), true);
    this.map = this.myChart.getModel().getComponent('bmap').getBMap();
    this.setMap(this.map);
  }

  setSeries(PipeData, WellData) {
    const series = [];
    if (PipeData.length > 0) {
      PipeData.map(function foo(Item) {
        // @ts-ignore
        series.push(
          // {
          //   name: Item.fromName + '>>>' + Item.toName,
          //   type: 'lines',
          //   coordinateSystem: 'bmap',
          //   zlevel: 1,
          //   animation: false,
          //   effect: {
          //     show: true,
          //     period: 5,
          //     trailLength: 0.2,
          //     symbolSize: [3, 3],
          //     color: '#fff'
          //   },
          //   lineStyle: {
          //     normal: {
          //       width: 1,
          //       curveness: 0
          //     }
          //   },
          //   data: PipeData
          // },
          {
            type: 'lines',
            coordinateSystem: 'bmap',
            zlevel: 2,
            effect: {
              show: true,
              period: 6,
              trailLength: 0,
              symbol: 'arrow',
              symbolSize: [0.5, 0.5]
            },
            lineStyle: {
              normal: {
                color: '#fff',
                width: 1,
                opacity: 0.4,
                curveness: 0
              }
            },
            data: PipeData
          },
          // {
          //   name: Item.fromName,
          //   type: 'effectScatter',
          //   coordinateSystem: 'bmap',
          //   zlevel: 2,
          //   rippleEffect: {
          //     brushType: 'stroke'
          //   },
          //   tooltip: {
          //     formatter(params) {
          //       const res = params.name;
          //       return res;
          //     },
          //   },
          //   label: {
          //     normal: {
          //       show: true,
          //       position: 'right',
          //       formatter: '{b}'
          //     }
          //   },
          //   symbolSize: [10, 10],
          //   showEffectOn: 'render',
          //   itemStyle: {
          //     normal: {
          //       color: '#fff'
          //     }
          //   },
          //   data: [{
          //     name: Item.fromName,
          //     value: Item.coords[0]
          //   }]
          // },
          {
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            zlevel: 2,
            rippleEffect: {
              brushType: 'stroke'
            },
            tooltip: {
              trigger: 'item',
              triggerOn: 'click',
              backgroundColor: 'rgba(245, 245, 245, 0.8)',
              alwaysShowContent: true,
              borderWidth: 1,
              borderColor: '#ccc',
              padding: 10,
              textStyle: {
                color: '#000'
              },
            },
            label: {
              normal: {
                show: true,
                position: 'right',
                // formatter() {
                //   const tipHtml = '';
                //   if (this.wallas) {
                //     // @ts-ignore
                //     tipHtml = ' <div class="tooltip" style="word-wrap:break-word; white-space:pre-wrap !important;">' +
                //       '<div class="horn">' +
                //       '<div class="lt"></div>' +
                //       '<div class="rb"></div>' +
                //       '</div>' +
                //       // tslint:disable-next-line:max-line-length
                //       '<div class="phoneData">' + '井ID：' + this.wallas.manholeId + '</div>' +
                //       '<div class="phoneData">' + '水位：' + this.wallas.waterLevel + '</div>' +
                //       '</div>';
                //   }
                // }
              }
            },
            symbolSize: [5, 5],
            itemStyle: {
              normal: {
                color: '#0f93ff'
              }
            },
            data: PipeData.map(function fo(dataItem) {
              return {
                name: dataItem.toName,
                value: dataItem.coords[1]
              };
            })
          }
          );
      });
    }
    if (WellData.length > 0) {
      series.push(
        {
          type: 'solid',
          coordinateSystem: 'bmap',
          symbolSize: 20,
          data: WellData.map(function foo(dataItem) {
            return {
              name: dataItem.address,
              value: [dataItem.long, dataItem.lat]
            };
          }),
          tooltip: {
            formatter(params) {
              const res = params.name;
              return res;
            },
          },
          label: {
            normal: {
              formatter: '{b}',
              position: 'right',
              show: true
            }
          },
          itemStyle: {
            normal: {
              borderColor: '#fff',
              color: '#ebe62b',
            }
          }
        });
    }
    return series;
  }

  setOptions(center, zoom, series) {
    const option = {
      tooltip: {
        trigger: 'item'
      },
      bmap: {
        center: center,
        zoom: zoom,
        roam: true,
        mapStyle: {
          // styleJson: [
          //   {
          //     'featureType': 'water',
          //     'elementType': 'all',
          //     'stylers': {
          //       'color': '#031628'
          //     }
          //   },
          //   {
          //     'featureType': 'land',
          //     'elementType': 'geometry',
          //     'stylers': {
          //       'color': '#000102'
          //     }
          //   },
          //   {
          //     'featureType': 'highway',
          //     'elementType': 'all',
          //     'stylers': {
          //       'visibility': 'off'
          //     }
          //   },
          //   {
          //     'featureType': 'arterial',
          //     'elementType': 'geometry.fill',
          //     'stylers': {
          //       'color': '#000000'
          //     }
          //   },
          //   {
          //     'featureType': 'arterial',
          //     'elementType': 'geometry.stroke',
          //     'stylers': {
          //       'color': '#0b3d51'
          //     }
          //   },
          //   {
          //     'featureType': 'local',
          //     'elementType': 'geometry',
          //     'stylers': {
          //       'color': '#000000'
          //     }
          //   },
          //   {
          //     'featureType': 'railway',
          //     'elementType': 'geometry.fill',
          //     'stylers': {
          //       'color': '#000000'
          //     }
          //   },
          //   {
          //     'featureType': 'railway',
          //     'elementType': 'geometry.stroke',
          //     'stylers': {
          //       'color': '#08304b'
          //     }
          //   },
          //   {
          //     'featureType': 'subway',
          //     'elementType': 'geometry',
          //     'stylers': {
          //       'lightness': -70
          //     }
          //   },
          //   {
          //     'featureType': 'building',
          //     'elementType': 'geometry.fill',
          //     'stylers': {
          //       'color': '#000000'
          //     }
          //   },
          //   {
          //     'featureType': 'all',
          //     'elementType': 'labels.text.fill',
          //     'stylers': {
          //       'color': '#857f7f'
          //     }
          //   },
          //   {
          //     'featureType': 'all',
          //     'elementType': 'labels.text.stroke',
          //     'stylers': {
          //       'color': '#000000'
          //     }
          //   },
          //   {
          //     'featureType': 'building',
          //     'elementType': 'geometry',
          //     'stylers': {
          //       'color': '#022338'
          //     }
          //   },
          //   {
          //     'featureType': 'green',
          //     'elementType': 'geometry',
          //     'stylers': {
          //       'color': '#062032'
          //     }
          //   },
          //   {
          //     'featureType': 'boundary',
          //     'elementType': 'all',
          //     'stylers': {
          //       'color': '#465b6c'
          //     }
          //   },
          //   {
          //     featureType: 'manmade',
          //     elementType: 'all',
          //     stylers: {
          //       color: '#022338'
          //     }
          //   },
          //   {
          //     featureType: 'label',
          //     elementType: 'all',
          //     stylers: {
          //       visibility: 'off'
          //     }
          //   }
          // ]
          styleJson: [
            {
              featureType: 'land',
              elementType: 'geometry',
              stylers: {
                color: '#212121'
              }
            },
            {
              featureType: 'building',
              elementType: 'geometry',
              stylers: {
                color: '#2b2b2b'
              }
            },
            {
              featureType: 'highway',
              elementType: 'all',
              stylers: {
                lightness: -42,
                saturation: -91
              }
            },
            {
              featureType: 'arterial',
              elementType: 'geometry',
              stylers: {
                lightness: -77,
                saturation: -94
              }
            },
            {
              featureType: 'green',
              elementType: 'geometry',
              stylers: {
                color: '#1b1b1b'
              }
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: {
                color: '#181818'
              }
            },
            {
              featureType: 'subway',
              elementType: 'geometry.stroke',
              stylers: {
                color: '#181818'
              }
            },
            {
              featureType: 'railway',
              elementType: 'geometry',
              stylers: {
                lightness: -52
              }
            },
            {
              featureType: 'all',
              elementType: 'labels.text.stroke',
              stylers: {
                color: '#313131'
              }
            },
            {
              featureType: 'all',
              elementType: 'labels.text.fill',
              stylers: {
                color: '#8b8787'
              }
            },
            {
              featureType: 'manmade',
              elementType: 'geometry',
              stylers: {
                color: '#1b1b1b'
              }
            },
            {
              featureType: 'local',
              elementType: 'geometry',
              stylers: {
                lightness: -75,
                saturation: -91
              }
            },
            {
              featureType: 'subway',
              elementType: 'geometry',
              stylers: {
                lightness: -65
              }
            },
            {
              featureType: 'railway',
              elementType: 'all',
              stylers: {
                lightness: -40
              }
            },
            {
              featureType: 'boundary',
              elementType: 'geometry',
              stylers: {
                color: '#8b8787',
                weight: '1',
                lightness: -29
              }
            }
          ]
        }
      },
      animation: false, // 解决拖拽地图后，echarts效果乱跑现象
      series: series
    };
    return option;
  }

  // 设置地图
  setMap(map) {

    setInterval(function foo() {

      map.closeInfoWindow();

    }, 1);

    map.enableScrollWheelZoom(true);
  }
  // 获取GPS数据
  ngOnChanges(changes: SimpleChanges): void {
    if (this.Pipettes) {
      this.PipeData = [];
      this.Pipettes.slice(0, 50).forEach( v => {
        const startId = v.flowoutGpsId.split(',');
        const endId = v.inflowGpsId.split(',');
        this.PipeData.push({
          fromName: '',
          toName: '',
          coords: [startId, endId]
        });
      });
      console.log(this.PipeData);
      this.myChart.setOption(this.setOptions([106.66189, 26.686475], 18, this.setSeries(this.PipeData, [])));
    }
  }
  // 中部地图省市联动
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
  // 获取省市区联动数据
  public getRegionsdata(): void {
    // this.session.getlocalObject('region');
    this.Regions = this.session.getlocalObject('region');
    // this.Regions.forEach( v => {
    //   this.region = [];
    //   const Province = v.region.regionName.split(',');
    //   const City = v.children.region.regionName.split(',');
    //   const ChildrenCity = v.children.children.region.regionName.split(',');
    //   this.region.push({
    //     ProvinceName: Province,
    //     CityName: City,
    //     ChildrenCityName: ChildrenCity,
    //   });
    // });
    console.log('111', this.Regions);
  }
}
