import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IplStatisticsRoutingModule } from './ipl-statistics-routing.module';
import { PlayersStatisticsComponent } from './components/players-statistics/players-statistics.component';
import { IplStatisticsComponent } from './ipl-statistics.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { PlayerService } from './services/player.service';
import { GraphComponent } from './components/graph/graph.component';
import { GraphDynamicThemingService } from './services/graph-dynamic-theming.service';


@NgModule({
  declarations: [IplStatisticsComponent,PlayersStatisticsComponent, GraphComponent],
  imports: [
    CommonModule,
    IplStatisticsRoutingModule,
    HttpClientModule,
    ChartsModule
  ],
  providers:[PlayerService,GraphDynamicThemingService]
})
export class IplStatisticsModule { }
