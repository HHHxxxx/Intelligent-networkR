import {Injectable} from '@angular/core';
import {HttpEvent, HttpRequest, HttpHandler, HttpInterceptor, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {EMPTY, Observable, of} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {GlobalService} from './global.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  public clonedRequest: any;
  public skipAuth = [
    `/login`
  ];
  constructor(
    private globalSrv: GlobalService,
    private router: Router,
  ) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // @ts-ignore
    req.body = this.parameterSerializationForm(req.body);
    if (environment.production) {
      return this.prod_http(req, next);
    } else {
      return this.debug_http(req, next);
    }
  }
  // debug http
  public debug_http(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(this.isSkipAuth(req.url));
    if (this.isSkipAuth(req.url)) {
     this.clonedRequest = req.clone({
     url: environment.dev_test_url + req.url,
     headers: req.headers
      .set('Content-type', 'application/x-www-form-urlencoded')
      });
    } else {
      this.clonedRequest = req.clone({
        url: environment.dev_test_url + req.url,
        headers: req.headers
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .set('token', sessionStorage.getItem('token'))
      });
    }
    return next.handle(this.clonedRequest).pipe(
      tap((event: any) => {
        if (event.status === 200) {
            // if (event.body.status === '1000') {
            return of(event);
          }
        return EMPTY;
        },
        (err) => {
          this.router.navigate(['/error'], {
            queryParams: {
              msg: '连接服务器失败，请检查网络！',
              status: err.status,
              btn: '请重试'
            }
          });
          return EMPTY;
        })
    );
  }
  // prod http
  public prod_http(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.isSkipAuth(req.url)) {
      this.clonedRequest = req.clone({
        url: environment.dev_test_url + req.url,
        headers: req.headers
          .set('Content-type', 'application/x-www-form-urlencoded')
      });
    } else {
      this.clonedRequest = req.clone({
        url: environment.dev_test_url + req.url,
        headers: req.headers
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .set('token', sessionStorage.getItem('token'))
      });
    }
    return next.handle(this.clonedRequest).pipe(
      tap((event: any) => {
          if (event.status === 200) {
            // if (event.body.status === '1000') {
            return of(event);
          }
          return EMPTY;
        },
        (err) => {
          this.router.navigate(['/error'], {
            queryParams: {
              msg: '连接服务器失败，请检查网络！',
              status: err.status,
              btn: '请重试'
            }
          });
          return EMPTY;
        })
    );
  }
  // is skip url
  public isSkipAuth(url: string) {
    if (url === '/Intelligent_pipe_network/login') {
      return '1';
    }
    return '0';
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
