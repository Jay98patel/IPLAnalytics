import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IplStatisticsRoutingModule } from './ipl-statistics-routing.module';
import { PlayersStatisticsComponent } from './components/players-statistics/players-statistics.component';
import { IplStatisticsComponent } from './ipl-statistics.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [IplStatisticsComponent,PlayersStatisticsComponent],
  imports: [
    CommonModule,
    IplStatisticsRoutingModule,
    HttpClientModule,
  ]
})
export class IplStatisticsModule { }
