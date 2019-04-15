import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HisComponent} from './his/his.component';

const routes: Routes = [
  {path: '', component: HisComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
