import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EchartsBarLandComponent} from './echarts-bar-land/echarts-bar-land.component';
import { EchartsBarPortlineComponent } from './echarts-bar-portline/echarts-bar-portline.component';
import { EchartsBarPortComponent } from './echarts-bar-port/echarts-bar-port.component';
import { EnchantsBarLargeComponent } from './echarts-bar-large/echarts-bar-large.component';
import {NgxEchartsModule} from 'ngx-echarts';
import { EchartsBarJobComponent } from './echarts-bar-job/echarts-bar-job.component';
import { EchartsBarRepairComponent } from './echarts-bar-repair/echarts-bar-repair.component';
import { EchartsBarEquipmentComponent } from './echarts-bar-equipment/echarts-bar-equipment.component';
import { EchartsBarInspComponent } from './echarts-bar-insp/echarts-bar-insp.component';

@NgModule({
  declarations: [
    EchartsBarLandComponent,
    EchartsBarPortlineComponent,
    EchartsBarPortComponent,
    EnchantsBarLargeComponent,
    EchartsBarJobComponent,
    EchartsBarRepairComponent,
    EchartsBarEquipmentComponent,
    EchartsBarInspComponent
  ],
  imports: [
    CommonModule,
    NgxEchartsModule
  ],
  exports: [
    EchartsBarLandComponent,
    EchartsBarPortlineComponent,
    EchartsBarPortComponent,
    EnchantsBarLargeComponent,
    EchartsBarJobComponent,
    EchartsBarRepairComponent,
    EchartsBarEquipmentComponent,
    EchartsBarInspComponent
  ]
})
export class EnchantsBarModule { }
