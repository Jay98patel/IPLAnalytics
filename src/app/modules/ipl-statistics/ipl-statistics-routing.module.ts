import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IplStatisticsComponent } from './ipl-statistics.component';

const routes: Routes = [
  {
    path:'',component:IplStatisticsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IplStatisticsRoutingModule { }
