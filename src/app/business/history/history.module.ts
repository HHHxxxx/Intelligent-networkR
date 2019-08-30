import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HisComponent } from './his/his.component';
import { HisMapComponent } from './his-map/his-map.component';
import { HisEventComponent } from './his-event/his-event.component';
import { HisPropComponent } from './his-prop/his-prop.component';
import { HisStatisticsComponent } from './his-statistics/his-statistics.component';
import { HisFlowComponent } from './his-flow/his-flow.component';
import {EnchantsBarModule} from '../../common/components/echarts-bar/enchants-bar.module';
import {EchartsMapModule} from '../../common/components/echarts-map/echarts-map.module';
import {EchartsPieModule} from '../../common/components/echarts-pie/echarts-pie.module';
import {EchartsCdkModule} from '../../common/components/echarts-cdk/echarts-cdk.module';
import {MainService} from '../../common/services/main.service';
import {DropdownModule, MultiSelectModule, RadioButtonModule} from 'primeng/primeng';
import {TableModule} from 'primeng/table';
import {FormsModule} from '@angular/forms';

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
    HistoryRoutingModule,
    EnchantsBarModule,
    EchartsMapModule,
    EchartsPieModule,
    EchartsCdkModule,
    MultiSelectModule,
    TableModule,
    FormsModule,
    RadioButtonModule,
    DropdownModule
  ],
  providers: [MainService]
})
export class HistoryModule { }
