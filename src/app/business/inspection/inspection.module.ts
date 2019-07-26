import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InspectionRoutingModule } from './inspection-routing.module';
import { InspMapComponent } from './insp-map/insp-map.component';
import { InspMonitorComponent } from './insp-monitor/insp-monitor.component';
import { InspStatisticsComponent } from './insp-statistics/insp-statistics.component';
import { InspScheduleComponent } from './insp-schedule/insp-schedule.component';
import { InspRecordingComponent } from './insp-recording/insp-recording.component';
import { InspComponent } from './insp/insp.component';
import {EnchantsBarModule} from '../../common/components/echarts-bar/enchants-bar.module';
import {EchartsMapModule} from '../../common/components/echarts-map/echarts-map.module';
import {MainService} from '../../common/services/main.service';

@NgModule({
  declarations: [
    InspMapComponent,
    InspMonitorComponent,
    InspStatisticsComponent,
    InspScheduleComponent,
    InspRecordingComponent,
    InspComponent
  ],
  imports: [
    CommonModule,
    InspectionRoutingModule,
    EnchantsBarModule,
    EchartsMapModule
  ],
  providers: [MainService]
})
export class InspectionModule { }
