import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InspComponent} from './insp/insp.component';

const routes: Routes = [
  {path: '', component: InspComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InspectionRoutingModule { }
