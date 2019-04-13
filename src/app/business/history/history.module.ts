import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HisComponent } from './his/his.component';
import { HisMapComponent } from './his-map/his-map.component';
import { HisEventComponent } from './his-event/his-event.component';

@NgModule({
  declarations: [HisComponent, HisMapComponent, HisEventComponent],
  imports: [
    CommonModule,
    HistoryRoutingModule
  ]
})
export class HistoryModule { }
