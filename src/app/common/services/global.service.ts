import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SessionService} from './session.service';
declare let $;

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public Token: any = sessionStorage.getItem('token');
  public headers = { headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})};

  private publicUrl = '120.78.156.30:8889';
  constructor(private http: HttpClient, private session: SessionService) { }

  public fault1(obj: object) {
    const that = this;
    console.log(obj);
    let fault;
    $.ajax({
      url: 'http://' + this.publicUrl + '/Intelligent_pipe_network/fault1',
      type: 'POST',
      async: false,
      cache: false,
      data: obj,
      beforeSend(request) {
        request.setRequestHeader('accessToken', that.session.get('accessToken'));
      },
      contentType: 'application/x-www-form-urlencoded',
      success(data) {
        fault = data.fault;
      },
      error(err) {
        console.log(err);
      }
    });
    return fault;
  }
  public sendOut() {
    let WorkUser;
    $.ajax({
      url: 'http://120.78.156.30:8889/Intelligent_pipe_network/sendOut',
      type: 'POST',
      async: false,
      cache: false,
      headers: {
        accessToken: this.session.get('accessToken')
      },
      contentType: 'application/x-www-form-urlencoded',
      success(data) {
        WorkUser = data.WorkUser;
      },
      error(err) {
        console.log(err);
      }
    });
    return WorkUser;
  }
}
