import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',redirectTo:'iplList',pathMatch:'full'
  },
  {
    path: 'iplList',
    loadChildren: () => import('./modules/ipl-statistics/ipl-statistics.module').then(m => m.IplStatisticsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
