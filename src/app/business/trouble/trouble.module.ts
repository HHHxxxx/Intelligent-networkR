import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TroubleMapComponent} from './trouble-map/trouble-map.component';
import {TroubleEventComponent} from './trouble-event/trouble-event.component';
import {TroubleProportionComponent} from './trouble-proportion/trouble-proportion.component';
import {TroubleWorkerComponent} from './trouble-worker/trouble-worker.component';
import {TroubleStatisticsComponent} from './trouble-statistics/trouble-statistics.component';
import {TroubleComponent} from './trouble/trouble.component';
import {TroubleRoutingModule} from './trouble-routing.module';
import {EnchantsBarModule} from '../../common/components/echarts-bar/enchants-bar.module';
import {EchartsPieModule} from '../../common/components/echarts-pie/echarts-pie.module';
import {EchartsMapModule} from '../../common/components/echarts-map/echarts-map.module';
import {MainService} from '../../common/services/main.service';
import {FormsModule} from '@angular/forms';
import {
  ButtonModule,
  ConfirmationService, DialogModule,
  DropdownModule,
  TabMenuModule, TabViewModule,
  ToggleButtonModule
} from 'primeng/primeng';

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
    EnchantsBarModule,
    EchartsPieModule,
    EchartsMapModule,
    FormsModule,
    TabMenuModule,
    ToggleButtonModule,
    DropdownModule,
    ButtonModule,
    DialogModule,
    TabViewModule,
  ],
  providers: [MainService, ConfirmationService]
})
export class TroubleModule {
}
