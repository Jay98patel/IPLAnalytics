import { Component, OnInit } from '@angular/core';
import { Player } from '../../ipl-player-model';
import { PlayerService } from '../../services/player.service';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-players-statistics',
  templateUrl: './players-statistics.component.html',
  styleUrls: ['./players-statistics.component.scss']
})
export class PlayersStatisticsComponent implements OnInit {

  playersStats:Player[];
  graphLabels: Label[];
  chartPlugins = [];
  barDataSet: ChartDataSets[];
  doughnutDataSet:ChartDataSets[];
  doughNutType:ChartType='doughnut';
  barType: ChartType = 'bar';
  lineGraphType: ChartType = 'line';
  pieChartType: ChartType = 'pie';
  graphLegend = false;
  graphOptions: ChartOptions = {
    responsive: true,
  };

  constructor(private playerService:PlayerService) { }

  ngOnInit(){
    this.getPlayersStats();
  }

  getPlayersStats(){
    let playerScores:number[]=[];
    let playerName:string[]=[];

    this.playerService.getPlayersStats().subscribe((playersStats:Player[])=>{
      this.playersStats=playersStats;
      this.playersStats.forEach((player:Player)=>
      {
        playerName.push(player.playerName);
        playerScores.push(player.playerScore);
        this.graphLabels=[...playerName];
        this.barDataSet = [{ data: [...playerScores,50], label: 'Players Runs'}];
        this.doughnutDataSet = [{ data: [...playerScores], label: 'Players Runs'}];
        });
    },(error:HttpErrorResponse)=>{});
  }
}
