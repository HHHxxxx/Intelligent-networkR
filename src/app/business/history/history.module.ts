import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HisComponent } from './his/his.component';
import { HisMapComponent } from './his-map/his-map.component';
import { HisEventComponent } from './his-event/his-event.component';
import { HisPropComponent } from './his-prop/his-prop.component';
import { HisStatisticsComponent } from './his-statistics/his-statistics.component';
import { HisFlowComponent } from './his-flow/his-flow.component';

@NgModule({
  declarations: [
    HisComponent,
    HisMapComponent,
    HisEventComponent,
    HisPropComponent,
    HisStatisticsComponent,
    HisFlowComponent
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule
  ]
})
export class HistoryModule { }
