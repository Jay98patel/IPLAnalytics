import { Component, OnInit } from '@angular/core';
import { Player } from '../../ipl-player-model';
import { PlayerService } from '../../services/player.service';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { HttpErrorResponse } from '@angular/common/http';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { GraphDynamicThemingService } from '../../services/graph-dynamic-theming.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

/**
 * graphLengend :- show legend below the chart.
 * dataSets:- it accepts array of data.
 * labels:- it is x axis labels
 * chartType:-  indicates the type of charts, it can be: line, bar, radar, pie, polarArea, doughnut
 * colors :- data colors, will use default and|or random colors if not specified.
 * pluginDataLabels:- it will label the value on the graph
 */

@Component({
  selector: 'app-players-statistics',
  templateUrl: './players-statistics.component.html',
  styleUrls: ['./players-statistics.component.scss']
})
export class PlayersStatisticsComponent implements OnInit {
  
  playersStats: Player[];
  graphLabels: Label[];
  barDataSet: ChartDataSets[];
  doughnutDataSet: ChartDataSets[];
  graphColor:Color[]=[
    { backgroundColor: 'purple' }
  ];
  
  doughNutType: ChartType = 'doughnut';
  barChart: ChartType = 'bar';
  lineGraphType: ChartType = 'line';
  pieChartType: ChartType = 'pie';
  polarArea:ChartType = 'polarArea'
  graphLegend = true;
  barChartPlugins = [pluginDataLabels];

  graphOptions: ChartOptions = {
    responsive: true,
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    },
    // legend: {
    //   labels: { fontColor: 'red' }
    // },
    // scales: {
    //     xAxes: [{
    //       ticks: { fontColor: 'black' },
    //       gridLines: { color: 'rgba(255,255,255,0.1)' }
    //     }],
    //     yAxes: [{
    //       ticks: { fontColor: 'black' },
    //       gridLines: { color: 'rgba(255,255,255,0.1)' }
    //     }]
    //   }
  };

  constructor(private playerService: PlayerService,private themeService:GraphDynamicThemingService) { }

  ngOnInit() {
    this.getPlayersStats();
  }

  getPlayersStats() {
    let playerScores: number[] = [];
    let playerName: string[] = [];
    let wickets: number[] =[];

    this.playerService.getPlayersStats().subscribe((playersStats: Player[]) => {
      this.playersStats = playersStats;
      this.playersStats.forEach((player: Player) => {
        playerName.push(player.playerName);
        playerScores.push(player.playerScore);
        wickets.push(player.wicketTaken);
        this.graphLabels = [...playerName];
        this.barDataSet = [{ data: [...playerScores], label: 'Players Runs', backgroundColor: 'yellow', hoverBackgroundColor: 'red', },
        { data: [...wickets], label: 'Wickets Taken' }];
        this.doughnutDataSet = [{ data: [...playerScores], label: 'Players Runs' },
        { data: [...wickets], label: 'Wickets Taken' }];
      });
    }, (error: HttpErrorResponse) => { });
  }

  onClickChartEvent({ event, active }: { event: MouseEvent, active: {}[] }) {
    console.log(event, active);
  }

  onHoverChart({ event, active }: { event: MouseEvent, active: {}[] }) {
    /*console.log(event.x, active[0]);*/
  }

  changeChartType() {
    this.barChart = this.barChart == 'bar' ? 'polarArea' : 'bar';
  }

  changeChartColor(){
    this.graphColor[0].backgroundColor=this.graphColor[0].backgroundColor == 'yellow' ? 'teal' : 'yellow';
  }

  changeChartTheme(){
    this.themeService.changeTheme('dark')
  }
}
