import { Component, OnInit } from '@angular/core';
import { Player } from '../../ipl-player-model';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-players-statistics',
  templateUrl: './players-statistics.component.html',
  styleUrls: ['./players-statistics.component.scss']
})
export class PlayersStatisticsComponent implements OnInit {
  playersStats:Player[];

  constructor(private playerService:PlayerService) { }

  ngOnInit(){
    this.getPlayersStats();
  }

  getPlayersStats(){
    this.playerService.getPlayersStats().subscribe((playersStats)=>{
      this.playersStats=playersStats;
    },(error)=>{})
  }

}
