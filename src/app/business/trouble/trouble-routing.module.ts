import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TroubleComponent} from './trouble/trouble.component';

const routes: Routes = [
  {path: '', component: TroubleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TroubleRoutingModule { }
