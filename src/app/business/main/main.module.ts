import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {MainRankingComponent} from './main-ranking/main-ranking.component';
import { MainMapComponent } from './main-map/main-map.component';
import { MainEventComponent } from './main-event/main-event.component';
import { MainDescriptionComponent } from './main-description/main-description.component';
import { MainLoadrateComponent } from './main-loadrate/main-loadrate.component';
import { MainFlowComponent } from './main-flow/main-flow.component';
import { MainProportionComponent } from './main-proportion/main-proportion.component';
import {MainRoutingModule} from './main-routing.module';
import {EnchantsBarModule} from '../../common/components/echarts-bar/enchants-bar.module';
import {EchartsMapModule} from '../../common/components/echarts-map/echarts-map.module';
import {EchartsLineModule} from '../../common/components/echarts-line/echarts-line.module';
import {EchartsPieModule} from '../../common/components/echarts-pie/echarts-pie.module';
import {MainService} from '../../common/services/main.service';

@NgModule({
  declarations: [
    MainComponent,
    MainRankingComponent,
    MainMapComponent,
    MainEventComponent,
    MainDescriptionComponent,
    MainLoadrateComponent,
    MainFlowComponent,
    MainProportionComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    EnchantsBarModule,
    EchartsMapModule,
    EchartsLineModule,
    EchartsPieModule,
  ],
  providers: [MainService]
})
export class MainModule { }
