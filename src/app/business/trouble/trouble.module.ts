import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TroubleMapComponent} from './trouble-map/trouble-map.component';
import {TroubleEventComponent} from './trouble-event/trouble-event.component';
import {TroubleProportionComponent} from './trouble-proportion/trouble-proportion.component';
import {TroubleWorkerComponent} from './trouble-worker/trouble-worker.component';
import {TroubleStatisticsComponent} from './trouble-statistics/trouble-statistics.component';
import {TroubleComponent} from './trouble/trouble.component';
import {TroubleRoutingModule} from './trouble-routing.module';
import {EchartsBarModule} from '../../common/components/echarts-bar/echarts-bar.module';
import {EchartsPieModule} from '../../common/components/echarts-pie/echarts-pie.module';
import {EchartsMapModule} from '../../common/components/echarts-map/echarts-map.module';

@NgModule({
  declarations: [
    TroubleMapComponent,
    TroubleEventComponent,
    TroubleProportionComponent,
    TroubleWorkerComponent,
    TroubleStatisticsComponent,
    TroubleComponent],
  imports: [
    CommonModule,
    TroubleRoutingModule,
    EchartsBarModule,
    EchartsPieModule,
    EchartsMapModule
  ]
})
export class TroubleModule {
}
