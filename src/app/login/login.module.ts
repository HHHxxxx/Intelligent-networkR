import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [ErrorComponent, LoginComponent],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
