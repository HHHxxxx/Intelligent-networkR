import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
  ) {
  }
  // 登陆验证
  public submitForm(params): Observable<any> {
    return this.http.post('/Intelligent_pipe_network/login', params);
  }
}

