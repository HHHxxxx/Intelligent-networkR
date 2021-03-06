import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  public sessionStorage: any;
  constructor() {
    if (!sessionStorage) {
      throw new Error('Current browser does not support Local Storage');
    }
    this.sessionStorage = sessionStorage;
  }
  public set(key: string, value: string): void {
    this.sessionStorage[key] = value;
  }

  public get(key: string): string {
    return this.sessionStorage[key] || false;
  }

  public setObject(key: string, value: any): void {
    this.sessionStorage[key] = value;
  }

  public getObject(key: string): any {
    return JSON.parse(this.sessionStorage[key] || '{}');
  }

  public remove(key: string): any {
    this.sessionStorage.removeItem(key);
  }
  public setlocalObject(key: string, value: any): void {
    this.sessionStorage[key] = JSON.stringify(value);
  }

  public getlocalObject(key: string): any {
    return JSON.parse(this.sessionStorage[key] || '{}');
  }
  // 表单参数序列化
  public parameterSerializationForm(obj: object): string {
    let result: string;
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        if (!result) {
          result = prop + '=' + obj[prop];
        } else {
          result += '&' + prop + '=' + obj[prop];
        }
      }
    }
    return result;
  }
}
export class UserRegion {
  userId: string;
  provinceRegionId: string; // 省地区id
  cityRegionId: string; // 市地区Id
  countyRegionId: string; // （县/区）地区Id
  townRegionId: string; // （镇或者乡）地区Id
  constructor(provinceRegionId: string, cityRegionId: string, countyRegionId: string, townRegionId: string) {
    this.cityRegionId = cityRegionId;
    this.countyRegionId = countyRegionId;
    this.provinceRegionId = provinceRegionId;
    this.townRegionId = townRegionId;
  }
}
