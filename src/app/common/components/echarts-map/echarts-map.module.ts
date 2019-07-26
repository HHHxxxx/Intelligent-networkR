import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EchartsMapComponent } from './echarts-map.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [EchartsMapComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [EchartsMapComponent]
})
export class EchartsMapModule { }
