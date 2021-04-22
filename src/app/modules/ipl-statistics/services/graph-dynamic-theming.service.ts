import { Injectable } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { ThemeService } from 'ng2-charts';
import { Theme } from '../ipl-player-model';

@Injectable()
export class GraphDynamicThemingService {
   

  private defaultTheme:Theme='light';

  get selectedTheme(){
    return this.defaultTheme;
  }

  set selectedTheme(selectedTheme){
    this.defaultTheme=selectedTheme;
    let setNewTheme:ChartOptions;
    if(this.selectedTheme == 'dark'){
      setNewTheme = {
        legend: {
          labels: { fontColor: 'red' }
        },
        scales: {
          xAxes: [{
            ticks: { fontColor: 'red' },
            gridLines: { color: 'rgba(255,255,255,0.1)' }
          }],
          yAxes: [{
            ticks: { fontColor: 'red' },
            gridLines: { color: 'rgba(255,255,255,0.1)' }
          }]
        },
        
      };
    } else {
      setNewTheme = {};
    }
    this.themeService.setColorschemesOptions(setNewTheme);
  }
  constructor(private themeService: ThemeService) { }

  changeTheme(theme: Theme) {
    this.selectedTheme = theme;
  }
}
