import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EchartsPieGeneralComponent } from './echarts-pie-general/echarts-pie-general.component';

@NgModule({
  declarations: [EchartsPieGeneralComponent],
  imports: [
    CommonModule
  ],
  exports: [EchartsPieGeneralComponent]
})
export class EchartsPieModule { }
