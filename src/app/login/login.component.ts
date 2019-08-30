import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {LoginService} from '../common/services/login.service';
import {SessionService} from '../common/services/session.service';

@Component({
  selector: 'rbi-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  public Regions = [];
  // 表单
  public myFromModule: FormGroup;
  public formUsername: any;
  public formPassword: any;
  public tj;
  public tips;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private login: LoginService,
    private session: SessionService,
  ) {
    this.myFromModule = fb.group({
      userName: ['', [Validators.required]],
      passWord: ['', [Validators.required, Validators.minLength(3)]],
    });
    this.formUsername = this.myFromModule.get('userName');
    this.formPassword = this.myFromModule.get('passWord');
  }

  ngOnInit() {
  }

  public onSubmit(): void {
    if (this.myFromModule.valid) {
      console.log(this.myFromModule.value);
      this.login.submitForm(this.myFromModule.value)
        .subscribe(res => {
          this.tj = res.msg;
          this.Regions = res.region;
          console.log(this.Regions);
          console.log(res);
          if (this.tj === 14) {
            this.session.set('accessToken', res.token);
            this.session.setlocalObject('region', res.region);
            this.router.navigate(['/home/main']);
          } else if (this.tj === 10) {
            this.tips = '用户不存在';
          } else if (this.tj === 12) {
            this.tips = '系统错误！';
          } else if (this.tj === 11) {
            this.tips = '密码错误';
          }
        });
    }
  }
}

