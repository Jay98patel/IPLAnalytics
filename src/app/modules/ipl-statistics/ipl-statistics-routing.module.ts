import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InverntoryReportComponent } from './components/inverntory-report/inverntory-report.component';
import { IplStatisticsComponent } from './ipl-statistics.component';

const routes: Routes = [
  {
    path:'',component:IplStatisticsComponent,
  },
  {
    path:'inventoryReport',component:InverntoryReportComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IplStatisticsRoutingModule { }
