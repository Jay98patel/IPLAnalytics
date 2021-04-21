import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IplStatisticsRoutingModule } from './ipl-statistics-routing.module';
import { PlayersStatisticsComponent } from './components/players-statistics/players-statistics.component';
import { IplStatisticsComponent } from './ipl-statistics.component';


@NgModule({
  declarations: [IplStatisticsComponent,PlayersStatisticsComponent],
  imports: [
    CommonModule,
    IplStatisticsRoutingModule
  ]
})
export class IplStatisticsModule { }
