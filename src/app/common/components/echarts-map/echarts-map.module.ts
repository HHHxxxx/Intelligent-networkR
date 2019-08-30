import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EchartsMapComponent } from './echarts-map.component';
import {FormsModule} from '@angular/forms';
import {NgxEchartsModule} from 'ngx-echarts';

@NgModule({
  declarations: [EchartsMapComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxEchartsModule
  ],
  exports: [EchartsMapComponent]
})
export class EchartsMapModule { }
