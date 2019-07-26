import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EchartsCdkIdxComponent } from './echarts-cdk-idx/echarts-cdk-idx.component';
import {NgxEchartsModule} from 'ngx-echarts';

@NgModule({
  declarations: [EchartsCdkIdxComponent],
  imports: [
    CommonModule,
    NgxEchartsModule
  ],
  exports: [EchartsCdkIdxComponent]
})
export class EchartsCdkModule { }
