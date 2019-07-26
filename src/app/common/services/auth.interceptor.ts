// import {Injectable} from '@angular/core';
// import {HttpEvent, HttpRequest, HttpHandler, HttpInterceptor, HttpResponse, HttpErrorResponse} from '@angular/common/http';
// import {environment} from '../../../environments/environment';
// import {Observable} from 'rxjs';
// import {catchError, map, mergeMap} from 'rxjs/operators';
// import {Router} from '@angular/router';
// import {GlobalService} from './global.service';
//
// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//   constructor(
//     private globalSrv: GlobalService,
//     private router: Router
//   ) {}
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const clonedRequest = req.clone({
//       url: environment.dev_test_url + req.url,
//      /* headers: req.headers
//         .set('Content-type', 'application/json; charset=UTF-8')
//         .set('token', '')*/
//     });
//     return next.handle(clonedRequest).pipe(
//       map((event: any) => {
//         if (event.status === 200) {
//           return event;
//         }
//       }),
//       catchError((err: HttpErrorResponse) => {
//         if (err.status === 0) {
//           this.router.navigate(['/error']);
//         }
//         return Observable.create(observer => observer.next(err));
//       })
//     );
//   }
// }
