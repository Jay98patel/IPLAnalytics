import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  @Input() graphLabels: Label[];
  @Input() barDataSet: ChartDataSets[];
  @Input() doughnutDataSet:ChartDataSets[];
  @Input() chartType: ChartType ;
  @Input() graphLegend;
  @Input() graphOptions: ChartOptions;

  constructor() { }

  ngOnInit(): void {
  }

}
