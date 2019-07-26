import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EchartsLineAreatbComponent } from './echarts-line-areatb/echarts-line-areatb.component';
import {NgxEchartsModule} from 'ngx-echarts';

@NgModule({
  declarations: [EchartsLineAreatbComponent],
  imports: [
    CommonModule,
    NgxEchartsModule
  ],
  exports: [EchartsLineAreatbComponent]
})
export class EchartsLineModule { }
