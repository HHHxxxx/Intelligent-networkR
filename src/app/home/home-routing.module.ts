import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: 'main', loadChildren: '../business/main/main.module#MainModule'},
      {path: 'trouble', loadChildren: '../business/trouble/trouble.module#TroubleModule'},
      {path: 'inspec', loadChildren: '../business/inspection/inspection.module#InspectionModule'},
      {path: 'history', loadChildren: '../business/history/history.module#HistoryModule'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
